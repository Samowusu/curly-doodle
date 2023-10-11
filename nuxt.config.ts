import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', 'nuxt-icon', '@sidebase/nuxt-auth'],
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: true
  },
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  build: {
    transpile: ['trpc-nuxt']
  }
})
