import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/pages/index.vue";
import TodosPage from "@/pages/todos/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/todos",
      name: "Todos",
      component: TodosPage,
    },
  ],
});

export default router;
