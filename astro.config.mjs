import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import postcssImport from "postcss-import";
import postcssNesting from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: "https://ramon-sg.github.io",
  base: "/rocket-admin-template",
  compressHTML: false,
  publicDir: "static",

  build: {
    assets: "assets",
  },

  // https://github.com/withastro/astro/issues/6202#issuecomment-1433171297
  // 👇 this fix "tailwind/nesting not recognized as a postcss plugin"
  vite: {
    css: {
      postcss: {
        plugins: [postcssImport, postcssNesting, tailwindcss, autoprefixer],
      },
    },
  },
});
