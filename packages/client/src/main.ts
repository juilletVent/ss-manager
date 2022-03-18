import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "./components/AdminLogin.vue";
import AdminPage from "./components/AdminPage.vue";
import UserPage from "./components/UserPage.vue";

import "./main.css";

const routes = [
  { path: "/", component: UserPage },
  { path: "/admin-login", component: AdminLogin },
  { path: "/admin-page", component: AdminPage },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});

app.use(router);

app.mount("#app");
