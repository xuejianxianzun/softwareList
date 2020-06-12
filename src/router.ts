import Vue from 'vue'
import VueRouter from 'vue-router'

import CategoryList from './components/CategoryList.vue'
import SoftwareList from './components/SoftwareList.vue'
import SoftwareDetails from './components/SoftwareDetails.vue'
import Search from './components/Search.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      component: CategoryList
    },
    {
      name: 'category',
      path: '/category/:name',
      component: SoftwareList
    },
    {
      name: 'software',
      path: '/software/:name',
      component: SoftwareDetails
    },
    {
      name: 'search',
      path: '/search/:word',
      component: Search
    }
  ]
})
