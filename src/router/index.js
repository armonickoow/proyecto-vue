import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Contact',
    name: 'ContactMe',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactMe.vue')
  },
  {
    path: '/Products',
    name: 'ProductsList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsList.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
