<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'icon-button'
  }
</script>

<style lang="scss" scoped>
  @import './IconButton.scss';
</style>
