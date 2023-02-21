<template>
  <app-layout pageName="Favorite">
    <main class="main">
      <div class="main__top">
        <h2>Current Date</h2>
        <div class="main__buttons">
          <app-button class="page__button button_left button_isActive">
            Today
          </app-button>

          <app-button class="page__button button_right">
            Five days
          </app-button>
        </div>
      </div>

      <div class="main__cities">
        <ul class="main__cityList">
          <li v-for="city in cities" :key="city">
            <city-card :city="city"/>
          </li>
        </ul>
      </div>

      <div class="main__weatherTimeline">
        <weather-timeline />
      </div>
    </main>
  </app-layout>
</template>

<script>
  export default {
    data() {
      return {
        cities: ['City'],
      }
    }
  }
</script>

<style lang="scss" scoped></style>
