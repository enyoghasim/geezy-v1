/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        firaCode: ["Fira Code", "monospace"],
      },
      dropShadow: {
        "light-blue": "#4DC5DA 7px 7px 0px",
      },
      colors: {
        lightBlue: "#4DC5DA",
      },
    },
  },
  plugins: [],
};
