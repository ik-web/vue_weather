<template>
  <app-layout pageName="Favorite">
    <weather-card>
      <template #card-header>
        <day-toggler />
      </template>

      <template #card-cityTabs>
        <app-tabs color="blue">
          <app-tab
            v-for="city in [{id:1,name:'Kyiv',path:'/favorite/kyiv'}, {id:2,name:'Vliv',path:'/favorite/lyiv'}]"
            :tab="city"
            :key="city.id"
            :activeTab="currentCityName === city.name"
            @click="() => handleTabClick(city.name)"
            color="blue"
          />
        </app-tabs>
      </template>

      <template #card-weatherInfo>
        <city-card v-if="true" />
        <day-list :days="['Today', 'Tomorrow', 'Friday', 'Saturday', 'Sunday']" v-if="false" />
      </template>
    </weather-card>
  </app-layout>
</template>

<script>
  export default {
    data() {
      return {
        currentCityName: 'Kyiv'
      }
    },
    methods: {
      handleTabClick(cityName) {
        this.currentCityName = cityName;
      }
    }
  }
</script>

<style lang="scss" scoped></style>
