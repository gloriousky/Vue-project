import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/home.vue");
const week1Project = () => import("../views/week1/index.vue");
const week2Project = () => import("../views/week2/login.vue");

const routes = [
  { path: "/", redirect: "/home" },
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
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
