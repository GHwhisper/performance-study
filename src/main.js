import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directive from './directive'

createApp(App)
  .use(store)
  .use(router)
  .use(directive)
  .mount('#app')
