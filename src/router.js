import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./views/Cart.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./views/admin/Products.vue")
    },
    {
      path: "/admin/product-add",
      name: "admin-product-add",
      component: () => import("./views/admin/ProductAdd.vue")
    }
  ]
});
