import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/home.vue");
const week1Project = () => import("../views/week1/index.vue");
const week2ProjectLogin = () => import("../views/week2/login.vue");
const week2ProjectProduct = () => import("../views/week2/product.vue");
const week3ProjectLogin = () => import("../views/week3/login.vue");
const week3ProjectProduct = () => import("../views/week3/product.vue");

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
    component: week2ProjectLogin,
  },
  {
    path: "/week2/product",
    name: "product",
    component: week2ProjectProduct,
  },
  {
    path: "/week3/login",
    name: "week3login",
    component: week3ProjectLogin,
  },
  {
    path: "/week3/product",
    name: "week3product",
    component: week3ProjectProduct,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
