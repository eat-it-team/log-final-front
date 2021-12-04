import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue";
import Faq from "./views/Faq.vue";
import Profile from "./views/Profile.vue";
import Results from "./views/Results.vue";

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
  {
    path: "/results",
    name: "Results",
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
