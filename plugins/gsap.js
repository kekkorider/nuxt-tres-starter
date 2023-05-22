import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  // gsap.registerPlugin(DrawSVGPlugin, ...)

  if (process.client) {
    // Some plugins need to be registered only on the client
    // gsap.registerPlugin(SplitText, ...)
  }

  return {
    provide: {
      gsap
    }
  }
})
