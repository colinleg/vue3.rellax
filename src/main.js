import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'

createApp(App).use(store).use(router).use(VueRellax).mount('#app')
