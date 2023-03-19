import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Inicio from "./pages/Inicio.vue";
import Hacerca from "./pages/Hacerca.vue";
import Contactos from "./pages/Contactos.vue";
import Categorias from "./pages/Categorias.vue";
import Servicios from "./pages/Servicios.vue";
import Cirujia from "./pages/Cirujia.vue";
import wh from "./pages/wh.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/Hacerca", component: Hacerca },
  { path: "/Contactos", component: Contactos },
  { path: "/Categorias", component: Categorias },
  { path: "/Servicios", component: Servicios },
  { path: "/Cirujia", component: Cirujia },
  { path: "/wh", component: wh },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
