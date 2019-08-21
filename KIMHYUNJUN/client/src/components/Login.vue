<template>
  <div class="loginBox">
    <div class="box">
      <h2 class="title">Welcome Bootcamp</h2>
      <form @submit.prevent="onSubmit(email, password)" class="box__form">
        <input type="text" v-model="email" placeholder="Email Address" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    onSubmit(email, password) {
      // Login Action
      this.$store
        .dispatch("LOGIN", { email, password })
        .then(() => this.redirect())
        .catch(({ message }) => (this.msg = message));
    },

    redirect() {
      const { search } = window.location;
      if (search === "") {
        this.$router.push("/");
      } else {
        const tokens = search.replace(/^\?/, "").split("&");
        const { returnPath } = tokens.reduce((qs, tkn) => {
          const pair = tkn.split("=");
          qs[pair[0]] = decodeURIComponent(pair[1]);
          return qs;
        }, {});
        this.$router.push(returnPath);
      }
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

.loginBox {
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
