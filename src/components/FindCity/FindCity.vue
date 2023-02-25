<template>
  <form class="form">
    <input
      type="text"
      name="city"
      placeholder="Find city"
      class="form__input"
    />

    <app-button class="form__button button_right">
      <img src="@/assets/icon/search.svg" alt="Search icon">
    </app-button>
  </form>
</template>

<script>
  export default {
    name: 'find-city',
  }
</script>

<style lang="scss" scoped>
  @import './FindCity.scss';
</style>
