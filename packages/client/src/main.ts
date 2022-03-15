import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from "vue-router";
import AdminPage from "./components/AdminPage.vue";
import UserPage from "./components/UserPage.vue";

import "./main.css";

const routes = [
  { path: "/", component: UserPage },
  { path: "/admin", component: AdminPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});

app.use(router);

app.mount("#app");
