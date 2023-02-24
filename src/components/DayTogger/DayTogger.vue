<template>
  <div class="buttons">
    <app-button
      :class="weatherRange === 'today'
        ? 'button button_left button_active'
        : 'button button_left'"
      @click="handleClickToday"
    >
      Today
    </app-button>

    <app-button
      :class="weatherRange === 'fiveDays'
        ? 'button button_right button_active'
        : 'button button_right'"
      @click="handleClickFiveDays"
    >
      Five days
    </app-button>
  </div>
</template>

<script>
  export default {
    name: 'day-toggler',
    data() {
      return {
        weatherRange: 'today' 
      }
    },
    methods: {
      handleClickToday() {
        this.weatherRange = 'today'
      },
      handleClickFiveDays() {
        this.weatherRange = 'fiveDays'
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './DayTogger.scss';
</style>
