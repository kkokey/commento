<template>
  <div class="bg">
    <div class="box">
      <h2 class="title">Sign Up</h2>
      <form @submit.prevent="onSubmit(name, email, password)" class="box__form">
        <input type="text" v-model="email" placeholder="Email Address" />
        <input type="text" v-model="name" placeholder="Name for this site" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="submit" value="REGISTER" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    onSubmit(name, email, password) {
      // Register Action
      this.$store
        .dispatch("REGISTER", { name, email, password })
        .then(() => this.redirect())
        .catch(({ message }) => (this.msg = message));
    },

    redirect() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.box .title {
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 50px;
}
.box .box__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box__form input {
  margin: 5px;
}
.box__form input:last-child {
  margin-top: 30px;
  width: 480px;
  height: 50px;
  font-weight: 300;
  background-image: linear-gradient(to bottom right, #0b4d33, #3d8567);
  cursor: pointer;
  color: #f7f7f7;
}
</style>
