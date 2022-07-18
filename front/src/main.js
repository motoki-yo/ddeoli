import { createApp } from 'vue'
import App from './App.vue'

/* import router for SPA and Dynamic loading */
import router from './router'

/* import Vuex store configs */
import store from './store'

/* import and register Vue Final Modal plugin */
import vfmPlugin from 'vue-final-modal'

createApp(App) 
.use(vfmPlugin)
.use(router)
.use(store)
.mount('#app')
