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

const uses = defineCollection({
	loader: file("./src/content/uses.toml"),
	schema: z.object({
		items: z.array(z.object({ description: z.string(), icon: z.string(), name: z.string(), url: z.url() })),
		order: z.number(),
	}),
});

export const collections = { home, likes, projects, uses };
