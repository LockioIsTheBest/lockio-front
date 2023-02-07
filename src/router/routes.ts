import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AboutPage from "../layouts/AboutPage.vue";
import NotFound from "../layouts/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
