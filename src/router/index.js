import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "TodoListPage",
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/TodoListPage.vue")
//   },
//   {
//     path: "/Home",
//     name: "Home",
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/Home.vue")
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
