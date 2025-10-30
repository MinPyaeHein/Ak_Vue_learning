import { createApp } from 'vue'
import App from './App.vue'      // <-- use App.vue as the root
import router from './router'

createApp(App).use(router).mount('#app')
