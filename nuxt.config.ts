// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      DATABASE_URL: process.env.DATABASE_URL,
    },
  },
})