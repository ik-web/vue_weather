<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img src="@/assets/icon/logo.svg" alt="Weather logo">
        </div>

        <h1 class="header__title">
          Vue Weather
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

    &__logo {
      width: 50px;
      height: 50px;
    }
  }
</style>
