import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Location from "./views/Location.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "",
      component: Dashboard,
      children: [
        {
          path: "",
          name: "location",
          component: Location
        }
      ]
    }
  ]
});
