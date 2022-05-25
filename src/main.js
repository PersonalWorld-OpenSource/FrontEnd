import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createRouter, createWebHistory } from "vue-router";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";

loadFonts();

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/main.vue"),
  },
  {
    path: "/miscasos",
    name: "Mis Casos",
    component: () => import("./views/Cases.vue"),
  },
  {
    path: "/notificaciones",
    name: "Mis Notificaciones",
    component: () => import("./views/Notifications.vue"),
  },
  {
    path: "/miabogado/:id",
    name: "Mis Abogado",
    component: () => import("./views/my-lawyer.vue"),
  },
  {
    path: "/micaso/:id",
    name: "Mi Caso",
    component: () => import("./views/my-case.vue"),
  },
  {
    path: "/perfil",
    name: "Mi Perfil",
    component: () => import("./views/app-profile.vue"),
  },
  {
    path: "/editar-perfil",
    name: "Editar Perfil",
    component: () => import("./views/app-profile-setting.vue"),
  },
  {
    path: "/subscripcion",
    name: "Ver Subscripcion",
    component: () => import("./views/choose-plan.vue"),
  },
  {
    path: "/pagar",
    name: "Pagar",
    component: () => import("./views/pay-subscription.vue"),
  },
  {
    path: "/encontrar-abogado",
    name: "Encontrar Abogado",
    component: () => import("./views/search-lawyer.vue"),
  },
  {
    path: "/lista-abogados",
    name: "Lista Abogados",
    component: () => import("./views/searched-lawyer.vue"),
  },
  {
    path: "/home-all",
    name: "Home-All",
    component: () => import("./views/home-all.vue"),
  },
  {
    path: '/register',
    name:"Register",
    component:()=> import('./views/register.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
