<template>
  <div class="bg">
    <div class="box">
      <h2>Me</h2>
      <div>
        <label>User Info:</label>
        <pre>{{ user }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
      accessLog: []
    };
  },
  created() {
    axios.get("http://localhost:4000/me").then(({ data }) =>
      (this.user = data.user).catch(() => {
        this.$store.dispatch("logout").then(() => {
          this.$router.push("/");
        });
      })
    );
  }
};
</script>

<style scoped>
.box h2 {
  font-size: 20px;
}
</style>
