import { createApp } from 'vue'
import App from './App.vue'

/* import router for SPA and Dynamic loading */
import router from './router'

/* import Bootstrap components */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/* import custom CSS settings */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, )

import LoadScript from "vue-plugin-load-script";

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(LoadScript)
.use(router)
.mount('#app')
