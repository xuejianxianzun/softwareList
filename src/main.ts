import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
// import { Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Component from 'vue-class-component'
Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 1000 }
Vue.use(VueAxios, axios)
// Vue.use(Icon)

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
