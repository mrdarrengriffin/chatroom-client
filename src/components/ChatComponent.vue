<template>
  <div>
    <div v-if="!data.self" class="message">
      {{data.message}}
    </div>
    <div v-else class="selfmessage">
      {{data.message}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style>
  .selfmessage {
    text-align: right;
  }
</style>
