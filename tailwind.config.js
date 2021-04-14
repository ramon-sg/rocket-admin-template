const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./**/*.{html,hbs}"],
  darkMode: "class",
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
