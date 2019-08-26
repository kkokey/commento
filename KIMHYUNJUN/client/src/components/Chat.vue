<template>
  <div class="bg">
    <div class="box">
      <header class="box__chat-header">
        <p class="connections">{{ connectionsMessage }}</p>
        <p v-if="typing" class="text-white">{{ typing }} is typing...</p>
      </header>
      <ul class="box__chat-body">
        <li class="messages" v-for="(msg, index) in messages" :key="index">
          <span :class="{'float-right':msg.type === 1}">
            <small class="user">{{ msg.user }}:</small>
            {{ msg.message }}
          </span>
        </li>
      </ul>
      <form @submit.prevent="sendMessage">
        <div class="box__message">
          <input type="text" v-model="message" class="box__control" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
import store from "../store/store";

export default {
  data() {
    return {
      socket: io("localhost:4000"),
      user: "",
      message: "",
      messages: [],
      connections: 0,
      connectionsMessage: "",
      typing: false,
      info: []
    };
  },

  created() {
    if (this.isAuthenticated()) {
      axios
        .get("http://localhost:4000/me")
        .then(({ data }) => (this.user = data.user.name));
    } else {
      this.user = "anonymous";
    }
  },

  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages = [...this.messages, data];
    });

    this.socket.on("CONNECTIONS", length => {
      this.connections = length;
      this.isConnectionMessage();
    });

    this.socket.on("typing", data => {
      this.typing = data;
    });

    this.socket.on("stopTyping", () => {
      this.typing = false;
    });
  },

  watch: {
    message(value) {
      value
        ? this.socket.emit("typing", this.user)
        : this.socket.emit("stopTyping");
    }
  },

  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.messages.push({
        message: this.message,
        user: "You",
        type: 1
      });

      this.socket.emit("NEW_MESSAGE", {
        user: this.user,
        message: this.message
      });
      this.message = "";
    },

    isAuthenticated() {
      return store.getters.isAuthenticated;
    },

    isConnectionMessage() {
      if (Number(this.connections) <= 1) {
        this.connectionsMessage = this.connections + " user is joining";
      } else {
        this.connectionsMessage = this.connections + " users are joining";
      }
    }
  }
};
</script>

<style scoped>
.box .box__chat-header {
  color: rgb(133, 129, 129);
}

.box .box__chat-body {
  position: absolute;
  top: 30%;
  width: 87%;
  font-size: 24px;
}

.box__chat-body .messages {
  padding: 5px;
}

@keyframes float {
  0% {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  50% {
    box-shadow: 0 13px 27px -45px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  100% {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
}

.box__message .box__control {
  position: relative;
  bottom: -600px;
  width: 750px;
  border-radius: 0;
  border: none;
  font-size: 14px;
  transition: width 0.5s ease-in-out, border-radius 0.5s ease-in-out,
    transform 0.5s ease-in-out;
}

.box__control:focus {
  outline: none;
  width: 600px;
  transform: translateY(-50px);
  border-radius: 40px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  animation: float 3s linear infinite forwards;
}

.float-right {
  color: rgb(94, 94, 94);
}

.float-right .user {
  display: none;
}

.text-white {
  position: absolute;
  color: rgb(218, 127, 24);
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  font-size: 15px;
}
</style>
