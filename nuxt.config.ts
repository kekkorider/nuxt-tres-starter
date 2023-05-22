import glsl from 'vite-plugin-glsl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('Tres') && tag !== 'TresCanvas'
    }
  },

  vite: {
    plugins: [glsl()]
  }
})
