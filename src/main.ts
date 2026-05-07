import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { reveal } from './directives/reveal'
import { magnetic } from './directives/magnetic'
import { spotlight } from './directives/spotlight'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('reveal', reveal)
app.directive('magnetic', magnetic)
app.directive('spotlight', spotlight)

app.mount('#app')
