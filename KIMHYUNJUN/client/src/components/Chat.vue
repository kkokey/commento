<template>
  <div class="bg">
    <div class="box"></div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      socket: io("localhost:4000")
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit("newMessage", { message });
      console.log(`You: ${message}`);

      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        message: this.message
      });
      this.message = "";
    }
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages = [...this.messages, data];
    });
  }
};
</script>

<style scoped>
</style>
