<template>
  <div class="container">
    <div class="wrap">
      <div class="longinFrm">
        <h3>로그인</h3>
        <form action="#" class="Frm">
          <div class="txtb">
            <label>아이디</label>
            <input type="text" v-model="user.user_id" />
          </div>

          <div class="txtb">
            <label>비밀번호</label>
            <input type="password" v-model="user.password" />
          </div>

          <div class="bottomWrap">
            <input type="button" value="로그인" v-on:click="longIn()" />
            <a href="javascript:;" v-on:click="chatInin">익명채팅입장</a>
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
    longIn() {
      this.$http
        .post('http://localhost:3000/login', {
          user: this.user,
        })
        .then((Response) => {
          // eslint-disable-next-line no-console
          console.log(Response);

          if (Response.data.success === 'fail') {
            // eslint-disable-next-line no-alert
            alert('아이디/비밀번호를 잘못 입력하셨습니다.');
          } else {
            // eslint-disable-next-line no-alert
            alert('로그인 성공');
            sessionStorage.setItem('user_name', Response.data.user_name);

            this.$store.commit('addDetail', {
              user_id: Response.data.user_id,
              user_name: Response.data.user_name,
            });

            this.$router.push({ name: 'chat' });
          }
        });
    },
    chatInin() {
      if (sessionStorage.getItem('user_name')) {
        sessionStorage.removeItem('user_name');
      }
      this.$router.push({ name: 'chat' });
    },
  },
  data() {
    return {
      user: {
        user_id: '',
        password: '',
      },
    };
  },
};
</script>
