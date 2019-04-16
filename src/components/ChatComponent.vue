<template>
  <div>
    <MessageComponent :data="{username:'Darren', message:'Hi mate', self:false}"/>
    <MessageComponent :data="{username:'james090500', message:'Hey!', self:true}"/>
    <MessageComponent :data="{username:'Darren', message:'You good?', self:false}"/>
    <MessageComponent :data="{username:'james090500', message:'Yeh', self:true}"/>
  </div>
</template>

<script>
import MessageComponent from './MessageComponent.vue'

export default {
  components: {
    MessageComponent
  },
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
