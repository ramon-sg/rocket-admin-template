import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import postcssNesting from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: "http://rocket-admin-template.clouw.com",

  // https://github.com/withastro/astro/issues/6202#issuecomment-1433171297
  // 👇 this fix "tailwind/nesting not recognized as a postcss plugin"
  vite: {
    css: {
      postcss: {
        plugins: [postcssNesting, tailwindcss],
      },
    },
  },
});
