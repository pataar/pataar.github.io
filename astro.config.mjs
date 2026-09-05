import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.pieterwillekens.nl",

	// every page's CSS is a few KB; inlining it removes the render-blocking stylesheet request
	build: { inlineStylesheets: "always" },

	integrations: [icon(), sitemap()],

	vite: {
		plugins: [tailwindcss()],
	},
});
