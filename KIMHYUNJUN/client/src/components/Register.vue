<template>
  <div class="joinBox">
    <div class="box">
      <h2 class="title">Sign Up</h2>
      <form @submit.prevent="onSubmit(name, email, password)" class="box__form">
        <input type="text" v-model="email" placeholder="Email Address" />
        <input type="text" v-model="name" placeholder="Name for this site" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="submit" value="register" />
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
input {
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  width: 450px;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
  padding: 5px 15px 5px 15px;
}

input:focus {
  outline: 0;
}

.joinBox {
  display: flex;
  justify-content: center;
}

.box {
  display: flex;
  margin-top: 200px;
  width: 550px;
  height: 550px;
  border: 2px solid rgba(0, 0, 0, 0.9);
  background-color: #fcfcfc;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
}

.box .title {
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 60px;
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
}
</style>
