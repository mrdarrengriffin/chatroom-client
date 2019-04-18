<template>
  <div style="height:100vh;">
    <RoomJoinComponent v-if="!this.inRoom"/>
    <RoomInfoComponent v-else/>
  </div>
</template>

<script>
import RoomJoinComponent from './RoomJoinComponent.vue'
import RoomInfoComponent from './RoomInfoComponent.vue'

export default {
  data() {
    return {
      inRoom: false,
      roomInfo: null
    }
  },
  components: {
    RoomJoinComponent,
    RoomInfoComponent
  },
  sockets: {
    joinRoomInit: function(data) {
      this.$parent.roomInfo = data;
      this.inRoom = true
    },
    userJoinedRoom: function(data) {
      this.$set(this.$parent.roomInfo.users, data.id, data)
    },
    userLeftRoom: function(userId) {
      this.$delete(this.$parent.roomInfo.users, userId)
    }
  },
}
</script>
