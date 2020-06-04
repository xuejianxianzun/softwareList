import Vue from 'vue'
import VueRouter from 'vue-router'

import CategoryList from './components/CategoryList.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: CategoryList
    }
  ]
})
