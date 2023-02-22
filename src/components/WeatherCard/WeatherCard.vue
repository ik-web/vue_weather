<template>
  <div class="card">
    <header class="card__header">
      <slot name="card-header"></slot>
    </header>

    <div class="card__body">
      <slot name="card-cityTabs"></slot>

      <div class="card__bodyBlock card__bodyBlock_top">
        <slot name="card-weatherInfo"></slot>
      </div>

      <div class="card__bodyBlock">
        <time-line />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'weather-card',
    props: {
      isFavoriteCard: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .card {
    &__header {
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 6px;
    }

    &__bodyBlock {
      height: 300px;
      padding: $box_indent;
      background: $color_blue_light;
      border: 1px solid $color_gray;
      border-radius: $box_rounded;

      &_top {
        margin-bottom: 40px;
        border-radius: 0 $box_rounded $box_rounded $box_rounded;
      }
    }
  }
</style>
