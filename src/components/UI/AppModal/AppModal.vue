<template>
  <div class="overlay">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-modal'
  }
</script>

<style lang="scss" scoped>
  @import './AppModal.scss';
</style>
