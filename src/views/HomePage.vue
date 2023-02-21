<template>
  <app-layout pageName="Home">
    <main class="main">
      <div class="main__top">
        <h2>Current Date</h2>
        <city-form />
      </div>

      <div class="main__cities">
        <ul class="main__cityList">
          <li v-for="city in cities" :key="city">
            <city-card :city="city" favoriteButton />
          </li>

          <li v-if="cities.length < 5">
            <city-card />
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
        cities: ['City']
      }
    }
  }
</script>

<style lang="scss" scoped></style>
