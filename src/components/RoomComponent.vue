<template>
  <div class="text-center mid">
    <b-img class="rounded-circle" :src="'https://api.adorable.io/avatars/150/' + form.username + '.png'"></b-img>
    <h2>Hey there</h2>
    <small>First, lets starts by choosing a name and room</small>
    <b-form class="text-left col-10 mx-auto">
      <label>Username:</label>
      <b-input id="username" v-model="form.username"></b-input>
      <label>Room:</label>
      <b-input id="room" v-model="form.room"></b-input>
      <b-button v-on:click="joinRoom()" variant="primary" class="mt-1 text-center">Join Room</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: null,
        room: null
      }
    }
  },
  props: {
    data: Object
  },
  methods: {
    joinRoom: function() {
      this.$socket.emit('joinRoom', this.form);
    }
  }
}
</script>

<style>
  .mid {
    top: 30%;
    position: relative;
    transform: translateY(-50%);
  }
</style>
