<template>
  <nav class="tabs">
    <slot></slot>
  </nav>
</template>

<script>
  export default {
    name: 'app-tabs'
  }
</script>

<style lang="scss" scoped>
  @import './AppTabs.scss';
</style>
