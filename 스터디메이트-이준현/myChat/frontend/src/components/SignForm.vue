<template>
  <div class="container">
    <div class="wrap">
      <div class="longinFrm">
        <h3>회원가입</h3>
        <form action="#" class="Frm">
          <div class="txtb">
            <label>사용자이름</label>
            <input type="text" v-model="user.name" />
          </div>

          <div class="txtb">
            <label>사용자이메일</label>
            <input type="text" v-model="user.email" />
          </div>

          <div class="txtb">
            <label>아이디</label>
            <input type="text" v-model="user.user_id" />
          </div>

          <div class="txtb">
            <label>비밀번호</label>
            <input type="password" v-model="user.password" />
          </div>
        </form>
      </div>
      <div class="joinWrap">
        <a class="joinBtn" href="javascript:;" v-on:click="singIn()">회원가입</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignForm',
  data() {
    return {
      user: {
        name: '',
        email: '',
        user_id: '',
        password: '',
      },
    };
  },
  methods: {
    singIn() {
      if (this.user.user_id === '' || this.user.password === null) {
        // eslint-disable-next-line no-alert
        alert('아이디/ 비밀번호를 입력해주세요');
        return;
      }
      this.$http
        .post('http://localhost:3000/signin', {
          user: this.user,
        })
        .then((Response) => {
          if (Response.data.success === 'success') {
            // eslint-disable-next-line no-alert
            alert('회원 가입 성공');
            this.$router.push('/');
          }
        });
    },
  },
};
</script>
