<template>
  <div class="container">
    <div class="wrap">
      <div class="longinFrm">
        <h3>로그인</h3>
        <form action="#" class="Frm">
          <div class="txtb">
            <label>아이디</label>
            <input type="text" />
          </div>

          <div class="txtb">
            <label>비밀번호</label>
            <input type="password" />
          </div>

          <div class="bottomWrap">
            <input type="submit" value="로그인" />
            <a href="#">Password찾기</a>
          </div>
        </form>
      </div>
      <div class="joinWrap">
        <a v-on:click="signIn()" class="joinBtn" href="javascript:;">회원가입</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  methods: {
    signIn() {
      this.$router.push({ name: 'SignIn' });
    },
  },
};
</script>
