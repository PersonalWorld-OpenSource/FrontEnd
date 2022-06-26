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
    component: () => import("./views/main-home.vue"),
  },
  {
    path: "/myconsults",
    name: "My consults",
    component: () => import("./views/Cases.vue"),
  },
  {
    path: "/notifications",
    name: "My Notifycations",
    component: () => import("./views/Notifications.vue"),
  },
  {
    path: "/lawyer/:id",
    name: "Lawyer",
    component: () => import("./views/lawyer-profile.vue"),
  },
  {
    path: "/consult/:id",
    name: "Case",
    component: () => import("./views/my-case.vue"),
  },
  {
    path: "/user/:id",
    name: "My Profile",
    component: () => import("./views/user-profile.vue"),
  },
  {
    path: "/edit-profile",
    name: "Edit profile",
    component: () => import("./views/app-profile-setting.vue"),
  },
  {
    path: "/subscription",
    name: "Ver Subscription",
    component: () => import("./views/choose-plan.vue"),
  },
  {
    path: "/buy/:id",
    name: "Buy",
    component: () => import("./views/pay-subscription.vue"),
  },
  {
    path: "/find-lawyer",
    name: "Find Lawyer",
    component: () => import("./views/search-lawyer.vue"),
  },
  {
    path: "/lawyers",
    name: "Lawyers",
    component: () => import("./views/searched-lawyer.vue"),
  },
  {
    path: '/register',
    name:"Register",
    component:()=> import('./views/register.vue')
  },
  {
    path: '/login',
    name:"Login",
    component:()=> import('./views/login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
