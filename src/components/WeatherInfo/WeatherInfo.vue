<template>
  <div class="city">
    <div class="city__info">
      <h2 class="city__name">{{ currentCity.name }}</h2>
      <p class="city__date">{{ currentDate }}</p>
      <p class="city__temp">{{ currentWeather.temp }}</p>
    </div>

    <div class="city__img">
      <img
        src="@/assets/icon/logo.svg"
        alt="Weather icon"
      >
    </div>

    <div class="city__divider"></div>

    <div class="city__moreInfo">
      More info
    </div>

    <div class="city__buttonContainer">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getCurrentDate } from '@/utils';

  export default {
    name: 'weather-info',
    props: {
      currentCity: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        currentDate: getCurrentDate()
      }
    },

    computed: {
      ...mapState('weather', [
        'currentWeather'
      ])
    },
  }
</script>

<style lang="scss" scoped>
  @import './WeatherInfo.scss';
</style>
