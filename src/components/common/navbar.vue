<template>
<nav v-if="loggedIn" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsed-nav" aria-controls="collapsed-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <router-link class="navbar-brand" :to="{ name: 'Welcome' }">
    <img src="../../assets/login-image.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
    The Grotto
  </router-link>
  <div class="collapse navbar-collapse" id="collapsed-nav">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'Shop' }">
          Shop
        </router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-dark my-2 my-sm-0" type="button" v-on:click="logOut()">Log Out</button>
    </form>
  </div>
</nav>
</template>

<script>
import { mapState } from 'vuex';
import Store from '../../store.js';
import { Auth } from 'aws-amplify';

const navBar = {
  name: 'nav-bar',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      loggedIn: state => state.is.loggedIn,
    })
  },
  methods: {
    logOut() {
      return Auth.signOut()
      .then(() => {
        Store.commit('authSignOut');
      })
      .then(() => {
        this.$router.push(`/`)
      })
      .catch((error) => {
        alert('Error signing out: ', error.message);
      });
    },
  }
};

export default navBar;
</script>

<style scoped>

</style>