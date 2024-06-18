// import router from '@renderer/router'
import pinia from './pinia'
import vuetify from './vuetify'

// types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    // .use(router)
    .use(pinia)
}
