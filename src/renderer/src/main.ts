import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import App from './App.vue'

// plugins
import { registerPlugins } from './plugins'

const app = createApp(App)
registerPlugins(app)

app.mount('#app')
