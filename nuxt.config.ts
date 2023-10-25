// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/index.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Space+Grotesk": {
            wght: [400, 500, 600, 700],
          },
          "Fira+Code": {
            wght: [500],
          },
        },
        display: "swap",
      },
    ],
  ],
});
