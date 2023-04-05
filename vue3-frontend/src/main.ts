import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import navbar from './components/navbar.vue';


import './index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
