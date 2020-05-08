import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/login/login.vue';

Vue.use(Router);

const Routes = new Router({
  mode: "history",
  routes: [
    {
      path:"/",
      name: "Login",
      component: Login,
    },
  ]
});

export default Routes;