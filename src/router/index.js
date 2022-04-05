import { createRouter, createWebHashHistory } from "vue-router";
import PageNotFound from "../views/PageNotFound.vue";
import Home from "../views/Home.vue";
import NotifyPage from "../views/NotifyPage.vue";
import Trello from "../views/Trello.vue";
import TrelloTask from "../components/TrelloTask.vue";
import PagePagination from "../views/PagePagination.vue";
import TestPage from "../views/TestPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/notify", name: "Notify", component: NotifyPage, },
  {
    path: "/trello", name: "Trello", component: Trello,
    children: [
      { path: 'task/:id', name: 'task', component: TrelloTask }
    ]
  },
  { path: "/pages", name: "Pages", component: PagePagination, },
  { path: "/test", name: "Test", component: TestPage, },
  { path: "/:notFound(.*)", name: "PageNotFound", component: PageNotFound, },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
