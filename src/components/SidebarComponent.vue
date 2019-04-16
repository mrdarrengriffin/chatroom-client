<template>
  <div class="h-100">
    <RoomJoinComponent v-if="!this.inRoom"/>
    <RoomInfoComponent v-else/>
  </div>
</template>

<script>
import RoomJoinComponent from './SidebarComponents/RoomJoinComponent.vue'
import RoomInfoComponent from './SidebarComponents/RoomInfoComponent.vue'

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
      this.roomInfo = data;
      this.inRoom = true
    },
    userJoinedRoom: function(data) {
      var newUsers = this.roomInfo.users
      newUsers[data.id] = data;
      this.roomInfo.users = []
      this.roomInfo.users = newUsers;
    },
    userLeftRoom: function(userId) {
      console.log(this.roomInfo.users)
      delete this.roomInfo.users[userId]
      console.log(this.roomInfo.users)
    }
  },
}
</script>
