import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routes/index'

// Crear la aplicación
const app = createApp(App)

// Crear pinia
const pinia = createPinia()

// Usar los plugins
app.use(pinia)
app.use(router)

// Montar la aplicación 
app.mount('#app')