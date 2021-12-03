import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue";
import Faq from "./views/Faq.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: Faq,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
