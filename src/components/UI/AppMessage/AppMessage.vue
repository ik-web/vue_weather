<template>
  <h2 class="message">
    <slot></slot>
  </h2>
</template>

<script>
  export default {
    name: 'app-message'
  }
</script>

<style lang="scss" scoped>
  @import './AppMessage.scss';
</style>