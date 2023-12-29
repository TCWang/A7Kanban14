// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image-edge", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "A7社區網站-地方行政",
      meta: [
        {
          name: "description",
          content: "A7新林口-社區網站 V2.0 14 地方行政",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
