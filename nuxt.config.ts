import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    adminPassword: '', // Set via NUXT_ADMIN_PASSWORD env var
  },
  typescript: {
    strict: true,
    shim: false,
  },
  nitro: {
    preset: 'node-server',
  },
});
