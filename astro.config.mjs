// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",

  integrations: [
    sitemap(),
    tailwind(),
    react(),
    markdoc(),
    alpinejs({ entrypoint: "./src/lib/entrypoint.ts" }),
    playformCompress(),
  ],

  experimental: {
    responsiveImages: true,
  },

  adapter: netlify(),
});
