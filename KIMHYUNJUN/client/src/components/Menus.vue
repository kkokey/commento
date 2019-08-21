<template>
  <header class="header">
    <router-link to="/" class="header__home">Home</router-link>

    <router-link to="/register" class="header__join">Sign Up</router-link>

    <a href v-if="isAuthenticated" @click.prevent="onClickLogout" class="header__login">Logout</a>
    <router-link to="/login" v-else class="header__login">Login</router-link>

    <router-link to="/me" class="header__me">Me</router-link>
  </header>
</template>

<script>
import store from "../store/store";
export default {
  computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated;
    }
  },
  methods: {
    onClickLogout() {
      store.dispatch("LOGOUT").then(() => this.$router.push("/"));
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.9);
  /* background-image: linear-gradient(to top, #fdc830, #f37335); */
  color: white;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
}

.header__home {
  margin-left: 15vh;
  justify-self: flex-start;
  margin-right: auto;
}

.header__join {
  margin-right: 15vh;
}

.header__login {
  margin-right: 15vh;
}

.header__logout {
  margin-right: 15vh;
}

.header__me {
  margin-right: 15vh;
}
</style>
