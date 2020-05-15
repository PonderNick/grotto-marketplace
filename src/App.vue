<template>
  <div class="app">
    <div class="background"/>
    <nav-bar></nav-bar>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/common/navbar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  max-width: 100%;
}

html {
  height: 100vh;
  width: 100vw;
}

body {
  height: 100%;
  width: 100%;
}

.background {
  display: block;
  position: fixed;
  top: 0px;
  height: 100%;
  width: 100%;
  background-image: url(./assets/background.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
}

.row {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
