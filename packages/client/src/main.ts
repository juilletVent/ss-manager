import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "./components/AdminLogin.vue";
import AdminPage from "./components/AdminPage.vue";
import UserPage from "./components/UserPage.vue";

import "./main.css";
import { RouteMaps } from "./routeMaps";

const routes = [
  { path: RouteMaps.PATH_USER, component: UserPage },
  { path: RouteMaps.PATH_ADMIN_LOGIN, component: AdminLogin },
  { path: RouteMaps.PATH_ADMIN_PAGE, component: AdminPage },
  { path: "/:pathMatch(.*)*", redirect: RouteMaps.PATH_USER },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});

app.use(router);

app.mount("#app");
