import { createRouter, createWebHashHistory } from "vue-router";
import PageNotFound from "../views/PageNotFound.vue";
import Home from "../views/Home.vue";
import NotifyPage from "../views/NotifyPage.vue";
import Cubbies from "../views/Cubbies.vue";
import TestPage from "../views/TestPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/notify", name: "Notify", component: NotifyPage, },
  { path: "/test", name: "Test", component: TestPage, },
  { path: "/cubbies", name: "Cubbies", component: Cubbies, },
  { path: "/:notFound(.*)", name: "PageNotFound", component: PageNotFound, },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
