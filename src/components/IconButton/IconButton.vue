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
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .button {
    display: block;
    width: $form_item_size;
    height: $form_item_size;
    padding: 4px;
    background: none;
    border: none;
    transition: all $transition_behavior;
  }
</style>
