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
  @import './AppHeader.scss';
</style>
