import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Avatar",
    component: () => import("../views/Face/Avatar.vue"),
  },
  {
    path: "/builder",
    name: "Builder",
    component: () => import("../views/Shape/Builder.vue"),
  },
  {
    path: "/worker",
    name: "Worker",
    component: () => import("../views/Worker.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
