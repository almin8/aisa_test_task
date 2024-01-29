import { createRouter, createWebHistory } from "vue-router";
import BasicList from "../components/BasicList.vue";
import CardList from "../components/CardList.vue";

const routes = [
  { path: "/", component: BasicList },
  { path: "/card", component: CardList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
