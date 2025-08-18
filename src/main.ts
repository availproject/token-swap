import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/styles/reset.css'
import '@fontsource-variable/dm-sans'
import './assets/styles/global.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
