import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    is: {
      loggedIn: false,
    }
  },
  mutations: {
    setAuth(state) {
      state.is.loggedIn = true;
    },
    authSignOut(state) {
      state.is.loggedIn = false;
    }
  },
});