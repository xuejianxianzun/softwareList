import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Component from 'vue-class-component'
Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 1000 }
Vue.use(VueAxios, axios)

const VUE_APP_BACKEND_URL = process.env.VUE_APP_BACKEND_URL
axios.defaults.baseURL = VUE_APP_BACKEND_URL

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
