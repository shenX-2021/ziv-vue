import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: () => import(/* webpackChunkName: "mobile" */ '../views/Mobile.vue')
  },
  {
    path: '/tab-container',
    name: 'Tab-Container',
    component: () => import(/* webpackChunkName: "sign" */ '../views/Tab-Container.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
