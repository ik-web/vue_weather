<template>
  <div class="city">
    <app-message v-if="todayWeatherLoading">
      Loading...
    </app-message>
  
    <div class="city__content" v-else>
      <div class="city__info">
        <h2 class="city__name">{{ currentCity.name }}</h2>
        <p class="city__date">{{ currentDate }}</p>
        <p
          :class="todayWeather.temp > 0
            ? 'city__temp city__temp_red' : 'city__temp'"
        >
          {{ `${todayWeather.temp}°C` }}
        </p>
      </div>
  
      <div class="city__img" v-if="todayWeather.icon">
        <img
          :src="`http://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`"
          alt="Weather icon"
        >
      </div>
  
      <div class="city__divider"></div>
  
      <div class="city__moreInfo">
        <article
          class="city__moreInfoItem"
          v-for="infoItem in infoItems"
          :key="infoItem.id"
        >
          <img
            :src="infoItem.src"
            :alt="infoItem.name"
            class="city__moreInfoIcon"
          >
          <h4>{{ infoItem.name }}:</h4> {{ infoItem.data }}
        </article>
      </div>
  
      <div class="city__buttonContainer">
        <slot name="buttons"></slot>
      </div>
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
        'todayWeather',
        'todayWeatherLoading'
      ]),

      infoItems() {
        return [
          {
            id: 1,
            name: 'Humidity',
            src: 'icons/weather/humidity.png',
            data: `${this.todayWeather.humidity}%`
          },
          {
            id: 2,
            name: 'Pressure',
            src: 'icons/weather/press.png',
            data: `${this.todayWeather.pressure} hPa`
          },
          {
            id: 3,
            name: 'Wind speed',
            src: 'icons//weather/wind.png',
            data: `${this.todayWeather.windSpeed} m/s`
          },
          {
            id: 4,
            name: 'Precipitation',
            src: 'icons//weather/precipitation.svg',
            data: `${this.todayWeather.precipitation}`
          }
        ]
      } 
    }
  }
</script>

<style lang="scss" scoped>
  @import './WeatherInfo.scss';
</style>
