import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), react()]
});