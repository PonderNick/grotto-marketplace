<template>
  <div class="app">
    <div class="background"/>
    <router-view>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
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
  height: 105%;
  width: 100%;
  background-image: url(./assets/background.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
}
</style>
