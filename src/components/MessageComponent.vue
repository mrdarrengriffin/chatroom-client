<template>
  <div v-if="!data.self" class="userMessageBox">
    <div class="userIcon">
      <b-img class="rounded-circle img-fluid" :src="'https://api.adorable.io/avatars/40/' + data.username + '.png'"></b-img>
    </div>
    <div class="messageContainer">
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
    margin-bottom: 1.5vh;
  }

  .userMessageBox > .userIcon {
    margin-top: 2.7vh;
  }

  .messageContainer {
    margin-left: 1vh;
    display: block;
  }

  .messageContainer > .userName {
    color: #b3b3b3;
  }

  .messageContainer > .userMessage {
    max-width: 40%;
    padding: 1vh;
    background: #efefef;
    border-radius: 100px;
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
    border-radius: 100px;
  }
</style>
