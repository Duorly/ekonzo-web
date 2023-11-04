// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "EKONZO",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "La solution pour la gestion de vos finances",
        },
        {
          name: "creator",
          content: "Duorli Réjouis Nebel Massengo",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    },
  },
  typescript: {
    strict: true
  },

  css: [
    "~/assets/css/index.css",
  ],

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  experimental: {
    payloadExtraction: true
  },
  imports: {
    dirs: ['stores', 'utils/**'],
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@pinia/nuxt',
    'nuxt-vitest'
  ],
  pinia: {
    autoImports: [
      'defineStore', 'acceptHMRUpdate', 'definePiniaStore',
    ],
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'sessionStorage',
  },

})
