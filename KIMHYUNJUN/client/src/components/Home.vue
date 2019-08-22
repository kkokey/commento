<template>
  <div class="bg">
    <div class="box">
      <h2>{{ greeting }}</h2>
      <router-link to="/chat">👉🏻 Join chat room 👈🏻</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      greeting: ""
    };
  },
  created() {
    axios
      .get("http://localhost:4000/")
      .then(result => (this.greeting = result.data.greeting));
  }
};
</script>

<style scoped>
.box h2 {
  font-size: 35px;
  font-weight: 700;
  color: #222831;
  margin-top: 100px;
  margin-bottom: 20px;
}

.box a {
  margin-top: 35px;
  font-size: 35px;
  font-weight: 300;
  color: rgb(78, 41, 11);
}
</style>
