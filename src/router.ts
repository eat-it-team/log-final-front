import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue";
import Faq from "./views/Faq.vue";
import Profile from "./views/Profile.vue";

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
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
