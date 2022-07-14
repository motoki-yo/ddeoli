import { createApp } from 'vue'
import App from './App.vue'

/* import router for SPA and Dynamic loading */
import router from './router'

createApp(App)
.use(router)
.mount('#app')
