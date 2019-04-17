<template>
  <div class="px-4 pt-4">
    <MessageComponent v-for="(value, key) in messages" :data='value'/>
  </div>
</template>

<script>
import MessageComponent from './MessageComponent.vue'

export default {
  data() {
    return {
      messages: []
    }
  },
  components: {
    MessageComponent
  },
  sockets: {
    receiveMessage: function(data) {
      data['username'] = this.$parent.roomInfo.users[data.user].username;
      if(this.$socket.id == data.user) {
        data['self'] = true;
      }
      this.$set(this.messages, this.messages.length+1, data)
    }
  }
}
</script>

<style>
  .selfmessage {
    text-align: right;
  }
</style>
