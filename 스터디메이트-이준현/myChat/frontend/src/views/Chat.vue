<template>
  <div class="container">
    <div class="wrap">
      <chatRoom :chatMsg="chatMsg" :name="name"></chatRoom>
      <chatForm v-on:send="submitMsg"></chatForm>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line import/extensions
import chatRoom from '@/components/ChatRoom.vue';
// eslint-disable-next-line import/extensions
import chatForm from '@/components/ChatForm.vue';
import io from 'socket.io-client';

export default {
  name: 'chat',
  data() {
    return {
      chatMsg: [],
      name: '',
    };
  },
  components: {
    chatRoom,
    chatForm,
  },
  mounted() {
    if (sessionStorage.getItem('user_name')) {
      this.name = sessionStorage.getItem('user_name');
    } else {
      this.name = '익명';
    }

    this.connect(this.name);
  },
  methods: {
    connect(name) {
      const socket = io.connect('http://localhost:3000');
      this.$socket = socket;
      // eslint-disable-next-line no-console
      console.log(this.$socket);

      this.$socket.emit('newUser', {
        msg: `${name} 님이 입장하셨습니다`,
        type: 'info',
      });

      this.$socket.on('newchat', (msg) => {
        this.chatMsg.push(msg);
      });
    },
    submitMsg(userChat) {
      // eslint-disable-next-line no-console
      console.dir(userChat);
      this.$socket.emit('chat', userChat);
      this.chatMsg.push({
        from: '나',
        msg: userChat.msg,
        type: 'chat',
      });
    },
  },
};
</script>
