// vite.config.js
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      context: {},
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
};
