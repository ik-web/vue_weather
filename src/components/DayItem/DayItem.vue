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
  @import './DayItem.scss';
</style>
