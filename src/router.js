import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/login/login.vue';
import Welcome from './components/login/welcome.vue';
import Profile from './components/user/profile.vue';
import Inventory from './components/user/inventory.vue';
import Shop from './components/shop/shop.vue';
import Item from './components/shop/item.vue';

Vue.use(Router);

const Routes = new Router({
  mode: "history",
  routes: [
    {
      path:"/",
      name: "Login",
      component: Login,
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Inventory,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/item",
      name: "Item",
      component: Item,
    },
  ]
});

export default Routes;