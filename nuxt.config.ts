import glsl from 'vite-plugin-glsl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 + TresJS starter',
      meta: [
        {
          name: 'description',
          content: 'Starter template for Nuxt 3 + TresJS created by Francesco Michelini'
        }
      ]
    },
  },

  css: [
    '@/assets/css/index.scss',
  ],

  modules: [
    '@nuxt/devtools',
    '@tresjs/nuxt',
    [
      '@nuxtjs/google-fonts', {
        prefetch: true,
        download: true,
        families: {
          'Maven+Pro': [400, 500, 700]
        }
      }
    ],
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],

  imports: {
    dirs: ['stores']
  },

  vite: {
    plugins: [glsl()]
  },
})
