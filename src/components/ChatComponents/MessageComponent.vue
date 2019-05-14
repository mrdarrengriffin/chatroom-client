<template>
  <div v-if="!messageObject.self" class="userMessageBox">
    <div class="messageContainer">
      <div class="userIcon">
        <b-img class="rounded-circle img-fluid" :src="'https://api.adorable.io/avatars/40/' + messageObject.username + '.png'"></b-img>
      </div>
      <div class="userName">
        <small>{{messageObject.username}}</small>
      </div>
      <div class="userMessage" v-for="message in messageObject.messages">
        {{message}}
      </div>
    </div>
  </div>
  <div v-else class="selfMessageBox">
    <div class="selfMessage" v-for="message in messageObject.messages">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageObject: Object
  }
}
</script>

<style>
  .userMessageBox {
    display: flex;
    margin-bottom: 1vh;
  }

  .messageContainer {
    position: relative;
    display: block;
    max-width: 40%;
  }

  .messageContainer > .userIcon {
    position: absolute;
    bottom: 0;
    width: 33px;
  }

  .messageContainer > .userName {
    white-space: nowrap;
    position: absolute;
    color: #b3b3b3;
    margin-left: 5.5vh;
  }

  .messageContainer > .userMessage {
    padding: 0.5vh 1vh;
    background: #efefef;
    border-radius: 1.3em;
    margin-left: 2vw;
    margin-top: 2vh;
    display: table;
  }

  .messageContainer > .userMessage ~ .userMessage {
    margin-top: 0.5vh;
  }

  .selfMessageBox {
    max-width: 40%;
    margin-left: auto;
    display: grid;
  }

  .selfMessageBox > .selfName {
    color: #b3b3b3;
  }

  .selfMessageBox > .selfMessage {
    color: white;
    margin-left: auto;
    margin-right: 1vh;
    padding: 0.5vh 1vh;
    background: #0084ff;
    border-radius: 1.3em;
    margin-top: 2vh;
  }

  .selfMessageBox > .selfMessage ~ .selfMessage {
    margin-top: 0.5vh;
  }
</style>
