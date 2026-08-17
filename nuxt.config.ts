// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/device',
    '@sidebase/nuxt-auth',
  ],
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  compatibilityDate: '2024-04-03',
  auth: {
    isEnabled: true,
    globalAppMiddleware: false,
    disableServerSideAuth: false,
    originEnvKey: process.env.AUTH_ORIGIN,
    baseURL: process.env.AUTH_ORIGIN + '/api/auth',
    provider: {
      type: 'authjs',
      trustHost: false,
      addDefaultCallbackUrl: false,
    },
    sessionRefresh: {
      enablePeriodically: 60 * 1000,
      enableOnWindowFocus: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
