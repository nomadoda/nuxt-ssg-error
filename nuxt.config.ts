// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    serveStatic: true,
    prerender: {
      routes: ['prerender'],
    },
  },
});
