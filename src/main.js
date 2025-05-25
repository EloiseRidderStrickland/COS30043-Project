import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
document.documentElement.setAttribute('data-bs-theme', 'dark')

import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')