import glsl from 'vite-plugin-glsl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/index.scss',
  ],

  modules: [
    [
      '@nuxtjs/google-fonts', {
        prefetch: true,
        download: true,
        families: {
          'Maven+Pro': [400, 500, 700]
        }
      }
    ]
  ],

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('Tres') && tag !== 'TresCanvas'
    }
  },

  vite: {
    plugins: [glsl()]
  }
})
