<template>
  <app-modal>
    <div class="message">
      <p class="message__text">
        <slot></slot>
      </p>

      <close-button class="message__button" @click="onClose" />
    </div>
  </app-modal>
</template>

<script>
  export default {
    name: 'app-message',
    props: {
      message: {
        type: String
      }
    },
    methods: {
      onClose() {
        this.$emit('close');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './AppMessage.scss';
</style>
