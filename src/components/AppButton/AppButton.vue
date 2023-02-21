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
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .button {
    height: $form_item_size;
    padding: 0 8px;
    color: $color_main;
    border: 1px solid $color_gray;
    border-radius: $block_rounded;
    transition: all $transition_behavior;
    
    &:hover {
      background-color: $color_gray_light;
    }

    &_left {
      border-radius: $block_rounded 0 0 $block_rounded;
    }

    &_right {
      border-radius: 0 $block_rounded $block_rounded 0;
    }

    &_isActive {
      background-color: $color_gray;
      color: $color-secondary;
    }
  }
</style>