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
            :activeTab="currentCityId === city.id"
            @click="() => handleTabClick(city.id)"
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
        currentCityId: 1
      }
    },
    methods: {
      handleTabClick(cityId) {
        this.currentCityId = cityId;
      }
    }
  }
</script>

<style lang="scss" scoped></style>
