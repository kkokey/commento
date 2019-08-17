<template>
  <div class="loginBox">
    <div class="box">
      <span class="title">Welcome Bootcamp</span>

      <div class="userInfo">
        <ul class="userInfo__name">
          <li class="userInfo__title">Username</li>
          <input type="text" placeholder=" Input Your name" />
        </ul>

        <ul class="userInfo__password">
          <li class="userInfo__title">Password</li>
          <input type="password" placeholder=" Input Your password" />
        </ul>
      </div>

      <span class="findPassword">
        <a href>Password 찾기</a>
      </span>
      <span class="submitBtn">
        <input type="submit" value="LOGIN" />
      </span>
      <span class="signUp">
        <a href>Don't have an account? Sign up</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginBody'
};
</script>

<style scoped>
input {
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  width: 450px;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
}

input:focus {
  outline: 0;
}

a {
  text-decoration: none;
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
}

.title {
  margin-top: 60px;
  margin-bottom: 70px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}

.userInfo {
  margin-left: 50px;
  font-size: 20px;
}

.userInfo .userInfo__name {
  margin-bottom: 30px;
}

.userInfo .userInfo__password {
  margin-bottom: 30px;
}

.userInfo__title {
  margin-bottom: 12px;
  font-weight: 700;
}

.findPassword {
  margin-right: 50px;
  margin-bottom: 30px;
  text-align: right;
}

.submitBtn input {
  margin-left: 150px;
  margin-bottom: 20px;
  width: 240px;
  height: 50px;
  border-style: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 15px;
  font-weight: 700;
}

.signUp {
  text-align: center;
}
</style>