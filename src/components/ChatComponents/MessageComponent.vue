<template>
  <div v-if="!data.self" class="userMessageBox">
    <div class="messageContainer">
      <div class="userIcon">
        <b-img class="rounded-circle img-fluid" :src="'https://api.adorable.io/avatars/40/' + data.username + '.png'"></b-img>
      </div>
      <div class="userName">
        <small>{{data.username}}</small>
      </div>
      <div class="userMessage">
        {{data.message}}
      </div>
    </div>
  </div>
  <div v-else class="selfMessageBox">
    <div class="selfMessage">
      {{data.message}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style>
  .userMessageBox, .selfMessageBox {
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
    margin-top: 2.7vh;
  }

  .messageContainer > .userName {
    position: absolute;
    color: #b3b3b3;
    margin-left: 5.5vh;
  }

  .messageContainer > .userMessage {
    padding: 1vh;
    background: #efefef;
    border-radius: 1.3em;
    margin-top: 2.5vh;
    margin-left: 5vh;
  }

  .selfMessageBox > .selfName {
    color: #b3b3b3;
  }

  .selfMessageBox > .selfMessage {
    max-width: 40%;
    color: white;
    margin-left: auto;
    margin-right: 1vh;
    padding: 0.5vh 2vh;
    background: #0084ff;
    border-radius: 1.3em;
  }
</style>
