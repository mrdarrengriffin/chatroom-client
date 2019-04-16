<template>
  <div class="h-100">
    <RoomJoinComponent />
  </div>
</template>

<script>
import RoomJoinComponent from './SidebarComponents/RoomJoinComponent.vue'
import RoomInfoComponent from './SidebarComponents/RoomInfoComponent.vue'

export default {
  components: {
    RoomJoinComponent,
    RoomInfoComponent
  }
}
</script>
