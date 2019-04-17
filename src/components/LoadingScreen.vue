<template>
  <div class="loading" v-if="loading">
    <h1 class="verticle">{{status}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Loading...",
      loading: true
    }
  },
  methods: {
    hideLoading: function() {
      this.loading = false;
    }
  },
  sockets: {
    connecting: function() {
      this.status = "Connecting..."
    },
    connect_error: function() {
      this.status = "Unable to connect"
    },
    reconnecting: function() {
      this.status = "Reconnecting..."
    },
    connect: function() {
      this.status = "Connected!"
      //To do fade out
      setTimeout(this.hideLoading, 2000);
    }
  }
}
</script>

<style>
  .verticle {
    top: 40%;
    transform: translateY(-50%);
    position: relative;
  }

  .loading {
    text-align: center;
    z-index: 100;
    width: 100%;
    background: white;
    position: absolute;
    top: 0;
    height: 100vh;
  }
</style>
