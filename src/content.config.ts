import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { parse } from "smol-toml";

// file() has no TOML support, so parse with smol-toml; array position becomes the render order
const tomlCategories = (path: string) =>
	file(path, {
		parser: text =>
			(parse(text) as { categories: { name: string }[] }).categories.map((category, index) => ({
				...category,
				id: category.name,
				order: index,
			})),
	});

const home = defineCollection({
	loader: glob({ base: "./src/content/home", pattern: "*.md" }),
	schema: z.object({
		command: z.string(),
		order: z.number(),
		title: z.string(),
	}),
});

const likes = defineCollection({
	loader: tomlCategories("./src/content/likes.toml"),
	schema: z.object({
		name: z.string(),
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
	loader: tomlCategories("./src/content/uses.toml"),
	schema: z.object({
		items: z.array(z.object({ description: z.string(), icon: z.string(), name: z.string(), url: z.url() })),
		name: z.string(),
		order: z.number(),
	}),
});

export const collections = { home, likes, projects, uses };
