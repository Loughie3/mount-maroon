import { createRouter, createWebHistory } from "vue-router";

import Home from "../Views/HomeView.vue";
import Gallery from "../Views/Gallery.vue";
import ContactPage from "../Views/ContactPage.vue";
import BookNow from "../Views/BookNow.vue";
import Explore from "../Views/ExplorePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/BookNow",
    name: "BookNow ",
    component: BookNow,
  },
  {
    path: "/explore",
    name: "explore ",
    component: Explore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
