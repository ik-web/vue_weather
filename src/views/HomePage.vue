<template>
  <delete-confirm
    v-if="cityIdForRemove"
    @cancel="handleCancelRemoveCity"
    @remove="handleRemoveCity"
  />

  <app-message v-if="isFavoriteLimitMessage" @close="handleCloseLimitMessage">
    Currently, the limit of cities in your favorites is {{ citiesLimit }}. You should delete one of the previous ones and then add a new one.
  </app-message>



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

          <add-tab @click="handleAddTab" v-if="!isCitiesLimit" />
        </app-tabs>
      </template>

      <template #weatherInfo>
        <weather-info :currentCity="currentCity">
          <template #buttons>
            <favorite-button
              :isActive="isFavoriteCity"
              @click="handleAddFavoriteCity"
            />

            <close-button @click="handlePrepareCityToRemove" />
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
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState
} from 'vuex';

  export default {
    data() {
      return {
        isFavoriteLimitMessage: false
      }
    },
    computed: {
      ...mapState('cities', [
        'cities',
        'currentCity',
        'cityIdForRemove',
        'citiesLimit'
      ]),

      ...mapState('favorite', [
        'favoriteCities',
        'favoriteCityIdForRemove',
      ]),

      ...mapGetters('cities', [
        'isCitiesLimit',
      ]),

      ...mapGetters('favorite', [
        'isFavoriteCitiesLimit',
      ]),

      isFavoriteCity() {
        return this.favoriteCities
          .some((city) => city.name === this.currentCity.name);
      }
    },

    methods: {
      ...mapMutations('cities', [
        'setCurrentCity',
        'addCity',
        'setCityIdForRemove',
        'removeCity'
      ]),

      ...mapMutations('favorite', [
        'addFavoriteCity'
      ]),

      ...mapActions('weather', [
        'getTodayWeather'
      ]),

      handleTabClick(city) {
        this.setCurrentCity(city.id);
        this.getTodayWeather(this.currentCity.name);
      },

      handleAddTab() {
        if (!this.isCitiesLimit) {
          this.addCity();
        }
      },

      handlePrepareCityToRemove() {
        this.setCityIdForRemove();
      },

      handleCancelRemoveCity() {
        this.setCityIdForRemove(false);
      },

      handleRemoveCity() {
        this.removeCity();
      },

      handleAddFavoriteCity() {
        if (this.isFavoriteCitiesLimit) {
          this.isFavoriteLimitMessage = true;
        } else if (!this.isFavoriteCity) {
          this.addFavoriteCity(this.currentCity);
        }
      },

      handleCloseLimitMessage() {
        this.isFavoriteLimitMessage = false;
      }
    },

    mounted() {
      const currentCityId = this.currentCity.id || 1
      this.setCurrentCity(currentCityId);
      this.getTodayWeather(this.currentCity.name);
    },
  }
</script>

<style lang="scss" scoped></style>
