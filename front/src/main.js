import { createApp } from 'vue'
import App from './App.vue'

/* import router for SPA and Dynamic loading */
import router from './router'

/* import Vuex store configs */
import store from './store'


createApp(App)
.use(router)
.use(store)
.mount('#app')
