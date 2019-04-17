<template>
  <div id="app">
    <LoadingScreen/>
    <div class="row no-gutters">
      <div class="col-2 border-right">
        <SidebarComponent/>
      </div>
      <div class="col">
        <ChatComponent/>
        <SendMessageComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import ChatComponent from './components/ChatComponent.vue'
import SendMessageComponent from './components/SendMessageComponent.vue'

export default {
  name: 'app',
  data() {
    return {
      roomInfo: null
    }
  },
  components: {
    LoadingScreen,
    SidebarComponent,
    ChatComponent,
    SendMessageComponent
  }
}
</script>

<style>
</style>
