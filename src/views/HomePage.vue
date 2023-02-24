<template>
  <delete-confirm
    v-if="cityIdForRemove"
    :currentCity="currentCity"
  />

  <app-layout pageName="Home">
    <app-content>
      <template #header>
        <find-city />
      </template>

      <template #tabs>
        <app-tabs>
          <app-tab
            v-for="city in cities"
            :tab="city"
            :key="city.id"
            :activeTab="currentCity.id === city.id"
            @click="() => handleTabClick(city)"
            color="blue"
          />

          <add-tab @click="handleAddTab" v-if="!cityLimit" />
        </app-tabs>
      </template>

      <template #weatherInfo>
        <weather-info :currentCity="currentCity">
          <template #buttons>
            <favorite-button></favorite-button>
            <close-button @click="handleRemoveCity" />
          </template>
        </weather-info>
      </template>
  
      <template #timeline>
        <wether-timeline />
      </template>
    </app-content>
  </app-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        cities: state => state.city.cities,
        currentCity: state => state.city.currentCity,
        cityIdForRemove: state => state.city.cityIdForRemove,
      }),
      ...mapGetters('city', [
        'cityLimit',
      ])
    },

    methods: {
      handleTabClick(city) {
        this.$store.commit('city/setCurrentCity', city.id);
      },

      handleAddTab() {
        if (!this.cityLimit) {
          this.$store.commit('city/addCity');
        }
      },

      handleRemoveCity() {
        this.$store.commit('city/setCityIdForRemove');
        console.log('click');
      }
    },

    mounted() {
      const currentCityId = this.currentCity.id || 1
      this.$store.commit('city/setCurrentCity', currentCityId);
      this.$router.push(this.currentCity.path);
    }
  }
</script>

<style lang="scss" scoped></style>
