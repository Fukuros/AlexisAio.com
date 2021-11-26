import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Champions from "../components/Champions.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/champions",
    name: "Champions",
    component: Champions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
 }
});

export default router;
