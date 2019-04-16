<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-2 border-right" style="height: 100vh">
        <RoomComponent/>
      </div>
      <div class="col" style="height: 100vh">
        <ChatComponent :data="{username:'Darren', message:'Hi mate', self:false}"/>
        <ChatComponent :data="{username:'james090500', message:'Hey!', self:true}"/>
        <ChatComponent :data="{username:'Darren', message:'You good?', self:false}"/>
        <ChatComponent :data="{username:'james090500', message:'Yeh', self:true}"/>
        <MessageComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import RoomComponent from './components/RoomComponent.vue'
import ChatComponent from './components/ChatComponent.vue'
import MessageComponent from './components/MessageComponent.vue'

export default {
  name: 'app',
  components: {
    RoomComponent,
    ChatComponent,
    MessageComponent
  }
}
</script>

<style>
</style>
