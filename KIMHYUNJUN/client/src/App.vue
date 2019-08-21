<template>
  <div>
    <menus></menus>
    <router-view></router-view>
  </div>
</template>

<script>
import Menus from "./components/Menus.vue";
export default {
  components: { Menus }
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

a {
  text-decoration: none;
  color: white;
}
</style>
