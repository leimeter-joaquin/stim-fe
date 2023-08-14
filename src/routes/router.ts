import * as VueRouter from "vue-router";

import Home from "./Home.vue";
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});
