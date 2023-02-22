<template>
  <article class="day">
    <div class="day__content">
      <h3 class="day__name">{{ day.name }}</h3>
      <p class="day__temp">{{ day.temp }}</p>
      <img
        src="@/assets/icon/logo.svg"
        alt="Weather icon"
        class="day__icon"
      >
    </div>
  </article>
</template>

<script>
  export default {
    name: 'day-item',
    props: {
      day: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

    .day {
      width: 100%;
      height: 100%;
      padding: 24px $box_indent 44px;
      box-shadow: $box_shadow;

    &__content {
      @include flex_between;
      flex-direction: column;
      height: 100%;
    }

    &__name {
      font-size: 24px;
    }
    
    &__temp {
      font-size: 48px;
      font-weight: 600;
      color: $color_gray;
    }

    &__icon {
      width: 80px;
      height: 80px;
    }
  }
</style>
