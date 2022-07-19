import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

/* import router for SPA and Dynamic loading */
import router from './router'
app.use(router)

/* import Vuex store configs */
import store from './store'
app.use(store)

/* import and register Vue Final Modal plugin */
import vfmPlugin from 'vue-final-modal'
app.use(vfmPlugin)


app.mount('#app')
