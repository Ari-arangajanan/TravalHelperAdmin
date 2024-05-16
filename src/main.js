import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'
import './configs'

createApp(App).use(router).mount('#app')
