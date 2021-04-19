import Axel from "../views/Axel";
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import pakorn from '../views/Profile-p.vue'

import Nathalie from '../views/Nathalie.vue'

import ProfileDanny from "../views/ProfileDanny.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Axel",
    name: "Axel",
    component: Axel,
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
  },

  {
    path: '/danny',
    name: 'ProfileDanny',
    component: ProfileDanny
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
