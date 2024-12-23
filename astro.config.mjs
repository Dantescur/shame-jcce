// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import tailwind from "@astrojs/tailwind";

import compressor from "astro-compressor";

import node from "@astrojs/node";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["localhost", "5.250.184.204"],
  },

  integrations: [
    sitemap(),
    tailwind(),
    partytown(),

    playformCompress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
    compressor({
      brotli: true,
      gzip: false,
    }),
  ],

  experimental: {
    responsiveImages: true,
  },

  adapter: node({
    mode: "standalone",
  }),
});
