
<template>
  <div id="app">
    <nav class="navbar">
      <button class="btn" v-on:click="mainPage()">Logo</button>
      <button class="btn" v-on:click="logout">logOut</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    mainPage() {
      // eslint-disable-next-line no-unused-vars
      this.$router.push('/').catch((err) => {});
    },
    logout() {
      if (sessionStorage.getItem('user_name')) {
        sessionStorage.removeItem('user_name');
        this.$router.push('/');
      }
    },
  },
};
</script>
