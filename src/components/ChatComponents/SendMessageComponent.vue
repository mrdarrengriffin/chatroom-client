<template>
  <div id="messagecomponent" class="border-top">
    <div class="d-flex">
      <b-form-input v-model="message" placeholder="Start typing..." class="border-0 col-11 mr-1" v-on:keyup.enter="sendMessage()" autocomplete="off"></b-form-input>
      <b-button v-on:click="sendMessage()" class="mx-auto" variant="link"><font-awesome-icon class="fa-2x" :icon="['far', 'paper-plane']" /></b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null
    }
  },
  props: {
    data: Object
  },
  methods: {
    sendMessage: function() {
      this.$socket.emit('sendMessage', this.message);
      this.message = null;
    }
  }
}
</script>

<style>
  #messagecomponent {
    bottom: 0;
    width: 100%;
    position: absolute;
  }
</style>
