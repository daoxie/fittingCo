// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Impor router yang baru dibuat

// Hapus impor CSS default Vite jika tidak digunakan lagi (main.css, base.css)
// import './assets/main.css'

const app = createApp(App)

app.use(router) // Daftarkan router ke aplikasi Vue

app.mount('#app')