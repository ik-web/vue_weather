<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'app-button'
  }
</script>

<style lang="scss" scoped>
  @import './AppButton.scss';
</style>
