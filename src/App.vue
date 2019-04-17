<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-2 border-right" style="height: 100vh">
        <SidebarComponent/>
      </div>
      <div class="col" style="height: 100vh">
        <ChatComponent/>
        <SendMessageComponent/>
      </div>
    </div>
  </div>
</template>

<script>
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
    SidebarComponent,
    ChatComponent,
    SendMessageComponent
  }
}
</script>

<style>
</style>
