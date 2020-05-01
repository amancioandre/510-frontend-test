import Vue from "vue";
import Router from "vue-router";

import HomeRoutes from "../views/Home/routes";
import InvoiceRoutes from "../views/Invoices/routes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiceClass: "active",
  routes: [...HomeRoutes, ...InvoiceRoutes],
});

export default router;
