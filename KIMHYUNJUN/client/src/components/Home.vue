<template>
  <div class="greeting-box">
    <h2>{{ greeting }}</h2>
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
.greeting-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 80px;
}

.greeting-box h2 {
  margin-top: 150px;
}
</style>
