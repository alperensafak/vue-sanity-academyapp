import { createRouter, createWebHistory } from "vue-router";
import Courses from "../views/Courses.vue";
import Home from "../views/Home.vue";
//We define routes in this file.
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    //dynamic routing for spesific courses
    path: "/academy/:slug",
    name: "SingleCourse",
    component: () => import("../components/SingleCourse.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;