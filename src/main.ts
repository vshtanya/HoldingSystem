import { createApp } from 'vue'
import { createPinia } from 'pinia' // Добавляем импорт
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia() // Создаем экземпляр Pinia

app.use(pinia) // Подключаем Pinia
app.use(router)
app.mount('#app')