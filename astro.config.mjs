// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://dantescur.github.io",
  base: "shame-jcce",
  integrations: [sitemap(), tailwind(), alpinejs(), playformCompress()],
  experimental: {
    responsiveImages: true,
  },
});
