<template>
  <div id="chatcomponent" class="px-4 pt-4">
    <div class="roomHeader">
      <b-img class="rounded-circle roomIcon" width="100px" :src="'https://github.com/identicons/' + this.$parent.roomInfo.name + '.png'"/>
      <h1>You have entered {{this.$parent.roomInfo.name}}</h1>
    </div>
    <hr />
    <MessageComponent v-for="message in messages" :messageObject='message'/>
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
      if(this.messages.length > 0 && this.messages[this.messages.length-1].user == data.user) {
        this.$set(this.messages[this.messages.length-1].messages, this.messages[this.messages.length-1].messages.length, data.message)
      } else {
        if(this.$socket.id == data.user) {
          data['self'] = true;
        }

        data['username'] = this.$parent.roomInfo.users[data.user].username;
        data['messages'] = [ data.message ]
        delete data.message

        this.$set(this.messages, this.messages.length+1, data)
      }
    }
  }
}
</script>

<style>
  .roomIcon {
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }

  .roomHeader {
    text-align: center;
  }
  #chatcomponent {
    overflow-y: scroll;
    height: 95vh;
  }

  .selfmessage {
    text-align: right;
  }
</style>
