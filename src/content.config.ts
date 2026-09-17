import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

/* Every collection carries an explicit `order` (frontmatter or TOML field) that pages sort on:
   getCollection() does NOT preserve file order. A TOML category's name is its entry id. */

const home = defineCollection({
	loader: glob({ base: "./src/content/home", pattern: "*.md" }),
	schema: z.object({
		command: z.string(),
		order: z.number(),
		title: z.string(),
	}),
});

const likes = defineCollection({
	loader: file("./src/content/likes.toml"),
	schema: z.object({
		order: z.number(),
		skills: z.array(z.object({ icon: z.string(), label: z.string(), url: z.url() })),
	}),
});

// the filename (minus .md) is the project name, so keep it verbatim instead of slugified
const projects = defineCollection({
	loader: glob({
		base: "./src/content/projects",
		generateId: ({ entry }) => entry.replace(/\.md$/, ""),
		pattern: "*.md",
	}),
	schema: z.object({
		install: z.string().optional(),
		order: z.number(),
		url: z.url(),
	}),
});

/* Pull requests to repositories I don't own, fetched once per build; the daily cron in deploy.yml keeps them fresh.

   A failed fetch fails the build on purpose: yesterday's deploy beats an empty stream. */
const pullRequests = defineCollection({
	loader: async () => {
		const token = process.env.GITHUB_TOKEN;
		const response = await fetch(
			"https://api.github.com/search/issues?q=author:pataar+type:pr+-user:pataar+is:public&sort=created&order=desc&per_page=30",
			{ headers: token ? { Authorization: `Bearer ${token}` } : {} },
		);
		if (!response.ok) throw new Error(`GitHub pull request search failed: ${response.status} ${response.statusText}`);

		const { items } = await response.json();
		return items.map((item: Record<string, any>) => ({
			createdAt: item.created_at,
			id: String(item.id),
			number: item.number,
			repository: item.repository_url.replace("https://api.github.com/repos/", ""),
			status: item.pull_request.merged_at ? "merged" : item.state,
			title: item.title,
			url: item.html_url,
		}));
	},
	schema: z.object({
		createdAt: z.iso.datetime(),
		number: z.number(),
		repository: z.string(),
		status: z.enum(["closed", "merged", "open"]),
		title: z.string(),
		url: z.url(),
	}),
});

const uses = defineCollection({
	loader: file("./src/content/uses.toml"),
	schema: z.object({
		items: z.array(z.object({ description: z.string(), icon: z.string(), name: z.string(), url: z.url() })),
		order: z.number(),
	}),
});

export const collections = { home, likes, projects, pullRequests, uses };
