<template>
  <div id="messagecomponent" class="border-top">
    <b-form inline>
      <b-form-input placeholder="Start typing..." class="border-0 col-11 mr-1"></b-form-input>
      <b-button class="mx-auto" variant="link"><font-awesome-icon class="fa-2x" :icon="['far', 'paper-plane']" /></b-button>
    </b-form>
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
  #messagecomponent {
    bottom: 0;
    width: 100%;
    position: absolute;
  }
</style>
