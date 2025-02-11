import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://pieterwillekens.nl",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		react(),
	],
	vite: { plugins: [tailwindcss()] },
});
