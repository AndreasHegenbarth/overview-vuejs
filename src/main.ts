import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'
import Button from 'primevue/button'
import Card from 'primevue/card'

import submissions from './storage/seeds'

const app = createApp(App)
app.use(submissions)
app.component('Button', Button)
app.component('Card', Card)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(router)

app.mount('#app')
