<template>
  <nav class="navbar">
    <button class="btn">
      <a v-on:click="mainPage()" href="javascrtip:;">Logo</a>
    </button>
    <button class="btn">
      <a href="javascrtip:;">Login/join</a>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'loginBar',
  methods: {
    mainPage() {
      this.$router.push('/');
    },
  },
};
</script>
