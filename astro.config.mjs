import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// mirrors Link.astro's external-link policy for links written in markdown content
const externalLinks = {
	name: "external-links",
	element: {
		filter: ["a"],
		visit(node, ctx) {
			if (typeof node.properties?.href === "string" && node.properties.href.startsWith("http")) {
				ctx.setProperty(node, "target", "_blank");
				ctx.setProperty(node, "rel", "noreferrer");
			}
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: "https://www.pieterwillekens.nl",

	// every page's CSS is a few KB; inlining it removes the render-blocking stylesheet request
	build: { inlineStylesheets: "always" },

	markdown: {
		processor: satteri({
			features: { smartPunctuation: false },
			hastPlugins: [externalLinks],
		}),
	},

	integrations: [icon(), sitemap()],

	vite: {
		plugins: [tailwindcss()],
	},
});
