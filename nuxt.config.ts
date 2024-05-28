// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", '@pinia/nuxt', '@nuxt/test-utils/module'],
  ui: {
    icons: ["heroicons", "ri"],
  }
})