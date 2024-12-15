// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import { visualizer } from "rollup-plugin-visualizer";

import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://dantescur.github.io",
  base: "shame-jcce",

  integrations: [
    sitemap(),
    tailwind(),
    alpinejs({ entrypoint: "./src/lib/entrypoint.ts" }),
    playformCompress(),
    react(),
    markdoc(),
  ],

  experimental: {
    responsiveImages: true,
  },

  adapter: node({
    mode: "standalone",
  }),
  vite: {
    plugins: [
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
  },
});