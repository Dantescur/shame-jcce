// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import tailwind from "@astrojs/tailwind";

import compressor from "astro-compressor";

import node from "@astrojs/node";

import vue from "@astrojs/vue";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["localhost"],
  },

  site: "https://nimble-kelpie-a27647.netlify.app/",
  output: "static",

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
    vue({ devtools: true }),
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
