<template>
  <div class="city">
    <div class="city__info">
      <h2 class="city__name">{{ currentCity.name }}</h2>
      <p class="city__date">{{ currentDate }}</p>

      <p class="city__temp city__temp_red" v-if="todayWeather.temp > 0">
        +{{ todayWeather.temp }}
      </p>
      
      <p class="city__temp" v-else>{{ todayWeather.temp }}</p>
    </div>

    <div class="city__img">
      <img
        :src="`http://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`"
        alt="Weather icon"
      >
    </div>

    <div class="city__divider"></div>

    <div class="city__moreInfo">
      <article class="city__moreInfoItem">
        <img
          src="@/assets/icon/weather/humidity.png"
          alt="humidity"
          class="city__moreInfoIcon"
        >
        <h4>Humidity:</h4> {{ todayWeather.humidity }} %
      </article>

      <article class="city__moreInfoItem">
        <img
          src="@/assets/icon/weather/press.png"
          alt="Pressure"
          class="city__moreInfoIcon"
        >
        <h4>Pressure:</h4> {{ todayWeather.pressure }} hPa
      </article>

      <article class="city__moreInfoItem">
        <img
          src="@/assets/icon/weather/wind.png"
          alt="Wind speed"
          class="city__moreInfoIcon"
        >
        <h4>Wind speed:</h4> {{ todayWeather.windSpeed }} m/s
      </article>

      <article class="city__moreInfoItem">
        <img
          src="@/assets/icon/weather/precipitation.svg"
          alt="Precipitation"
          class="city__moreInfoIcon"
        >
        <h4>Precipitation:</h4> {{ todayWeather.precipitation }}
      </article>
    </div>

    <div class="city__buttonContainer">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getCurrentDate } from './utils';

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
        'todayWeather'
      ]),
    }
  }
</script>

<style lang="scss" scoped>
  @import './WeatherInfo.scss';
</style>
