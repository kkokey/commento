<template>
  <div id="app">
    <loginHeader />
    <loginBody />
  </div>
</template>

<script>
import loginHeader from "./components/loginHeader.vue";
import loginBody from "./components/loginBody.vue";

export default {
  name: "app",
  components: {
    loginHeader,
    loginBody
  }
};
</script>

<style>
@import "./styles/reset.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
