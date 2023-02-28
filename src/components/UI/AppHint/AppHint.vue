<template>
  <h2 class="message">
    <slot></slot>
  </h2>
</template>

<script>
  export default {
    name: 'app-hint'
  }
</script>

<style lang="scss" scoped>
  @import './AppHint.scss';
</style>