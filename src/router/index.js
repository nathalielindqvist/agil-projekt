import Axel from "../views/Axel";
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nathalie from '../views/Nathalie.vue'

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
    path: '/nathalie',
    name: 'Nathalie',
    component: Nathalie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
