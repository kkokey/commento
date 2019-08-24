<template>
  <div class="chatFrm">
    <textarea style="resize:none;" class="writeArea" v-model="msg"></textarea>
    <button class="writeBtn" @click="submitMsg">전송</button>
  </div>
</template>

<script>
export default {
  name: 'chatForm',
  data() {
    return {
      msg: '',
    };
  },
  created() {},
  methods: {
    submitMsg() {
      const userChat = {
        from: this.$store.state.user_name,
        msg: this.msg,
        type: 'chat',
      };
      this.$emit('send', userChat);
      this.msg = '';
    },
  },
};
</script>

<style scoped>
.chatFrm {
  width: 100%;
}
.writeArea {
  font-weight: bold;
  color: #2d385fd4;
  width: 80%;
  min-height: 50px;
  max-height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
}
.writeBtn {
  height: 30px;
  width: 120px;
  display: inline-block;
  background-color: #2d385fd4;
  border: 1px solid #2d385fd4;
  position: absolute;
}
</style>
