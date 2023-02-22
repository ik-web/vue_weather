<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img src="@/assets/icon/logo.svg" alt="Weather logo">
        </div>

        <h1 class="header__title">
          Vue Weather App
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style lang='scss' scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .header {
    &__inner {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 80px;
      padding: 12px 0;
    }

    &__title {
      color: $color_green;
    }

    &__logo {
      width: 56px;
      height: 56px;
      padding: 8px;
      border-radius: 50%;
      box-shadow: $box_shadow;
    }
  }
</style>
