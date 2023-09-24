/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin.js";
module.exports = {
  darkMode: 'false',
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,js,jsx,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [preline],
};
