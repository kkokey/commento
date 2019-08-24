<template>
  <div class="chat-room">
    <h3>{{name}}님의 채팅방</h3>
    <div class="chat">
      <ul class="chat-list">
        <li v-for="(item, index) in chatMsg" :key="index">
          <div v-if="item.type === 'info'" class="info" style="text-align:center;">
            <span>{{item.msg}}</span>
          </div>
          <div v-if="item.type === 'chat'" class="user">
            {{item.from}} :
            <span>{{item.msg}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chatRoom',
  props: ['chatMsg', 'name'],
  created() {},
};
</script>

<style  scoped>
h3 {
  color: #2d385fd4;
}
.chat-list {
  list-style: none;
}
.chat {
  height: 350px;
  overflow-y: auto;
}
.chat-list > li {
  border-bottom: 1px solid gray;
  font-size: 1.3em;
  margin-bottom: 10px;
}
.info {
  border: 1px solid gray;
  font-size: 0.8em;
  background-color: #a9aaad75;
  border-bottom: none;
}
</style>
