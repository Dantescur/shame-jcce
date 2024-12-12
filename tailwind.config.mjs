/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
        open: ["Open Sans", "sans-serif"],
        condensed: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        bluehead: "#6f92cb",
        bluestrong: "#225cbb",
      },
    },
  },
  plugins: [],
};
