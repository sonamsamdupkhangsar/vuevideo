import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import User from "@/views/User.vue";
import NotFound from "@/views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "sdsdLogin",
    component: Login,
  },
  {
    path: "/user/:name",  // <-- notice the colon
    name: "User",
    component: User,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;