import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import pakorn from '../views/Profile-p.vue'

import Nathalie from '../views/Nathalie.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {

    path: '/pakorn',
    name: 'Profile-p',
    component: pakorn

  },
  {
    path: '/nathalie',
    name: 'Nathalie',
    component: Nathalie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
