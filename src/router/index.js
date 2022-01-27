import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/home.vue");
const week1Project = () => import("../views/week1/index.vue");
const week2Project = () => import("../views/week2/login.vue");
const week2ProjectIndex = () => import("../views/week2/product.vue");

const routes = [
  { path: "/home", redirect: "/" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/week1",
    name: "week1",
    component: week1Project,
  },
  {
    path: "/week2/login",
    name: "login",
    component: week2Project,
  },
  {
    path: "/week2/product",
    name: "product",
    component: week2ProjectIndex,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
