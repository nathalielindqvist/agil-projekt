import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Axel from "../views/Axel";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
