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
      // eslint-disable-next-line no-console
      console.log('실행됨');
      this.$http
        .post('/api/userSignin', {
          user: this.user,
        })
        .then((Response) => {
          if (Response.data.success === 'success') {
            // eslint-disable-next-line no-alert
            alert('성공');
          }
        });
    },
  },
};
</script>
