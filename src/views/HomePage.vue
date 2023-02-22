<template>
  <app-layout pageName="Home">
    <weather-card>
      <template #card-header>
        <card-form />
      </template>

      <template #card-cityTabs>
        <app-tabs color="blue" buttonAddNewTab>
          <app-tab
            v-for="city in [{id:1,name:'Kyiv',path:'/kyiv'}, {id:2 ,name:'Vliv', path:'/lyiv'}]"
            :tab="city"
            :key="city.id"
            :activeTab="currentCityName === city.name"
            @click="() => handleTabClick(city.name)"
            color="blue"
          />
        </app-tabs>
      </template>

      <template #card-weatherInfo>
        <city-card buttonFavorite />
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
