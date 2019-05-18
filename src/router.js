import Vue from "vue";
import Router from "vue-router";
// import SignUp from "./views/SignUp.vue";
// import LogIn from "./views/LogIn.vue";
import Dashboard from "./views/Dashboard.vue";
import Location from "./views/Location.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "signup",
    //   component: SignUp
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: LogIn
    // },
    {
      path: "/", //normaly with routing /dashboard
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
