<template>
  <div>
    <h5 class="my-2 text-center">{{roomInfo.name}}</h5>
    <hr class="m-0"/>
    <div name="userGroup">
      <div v-for="(value, key) in roomInfo.users" class="userItem py-2 pl-2 border-bottom">
        <div class="userIcon">
          <b-img class="rounded-circle img-fluid" :src="'https://api.adorable.io/avatars/30/' + value.username + '.png'"></b-img>
        </div>
        <div class="userName">
          <div class="d-flex h-100 ml-2">{{value.username}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomInfo: this.$parent.roomInfo
    }
  }
}
</script>

<style>
  .userItem {
    display: flex;
  }

  .userName > div {
    align-items: center;
  }
</style>
