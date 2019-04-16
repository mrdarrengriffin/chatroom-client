<template>
  <div v-if="!data.self" class="userMessageBox">
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
  <div v-else class="selfMessageBox">
    <div class="selfMessage">
      {{data.message}}
    </div>
    <div class="selfIcon">
      <b-img class="rounded-circle img-fluid" :src="'https://api.adorable.io/avatars/40/' + data.username + '.png'"></b-img>
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
  .selfMessageBox {
    text-align: right;
  }

  .userMessageBox, .selfMessageBox {
    display: flex;
  }

  .userMessageBox > .userName {
    transform: translateY(-20px);
    left: 86px;
    position: absolute;
    color: #b3b3b3;
  }

  .userMessageBox > .userMessage {
    margin-left: 1vh;
    padding: 1vh;
    background: #efefef;
    border-radius: 100px;
  }

  .selfMessageBox > .selfMessage {
    color: white;
    margin-left: auto;
    margin-right: 1vh;
    padding: 1vh;
    background: #0084ff;
    border-radius: 100px;
  }
</style>
