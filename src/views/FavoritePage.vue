<template>
  <delete-confirm
    v-if="favoriteCityIdForRemove"
    :onCancel="handleCancelRemoveCity"
    :onRemove="handleRemoveCity"
  />

  <app-layout pageName="Favorite">
    <app-message v-if="!favoriteCities.length">
      There is no any favorite city...
    </app-message>

    <app-content v-else>
      <template #header>
        <day-toggler />
      </template>

      <template #tabs>
        <app-tabs>
          <app-tab
            v-for="city in favoriteCities"
            :tab="city"
            :key="city.id"
            :activeTab="currentFavoriteCity.id === city.id"
            @click="() => handleTabClick(city)"
            color="blue"
          />
        </app-tabs>
      </template>

      <template #weatherInfo>
        <weather-info :currentCity="currentFavoriteCity">
          <template #buttons>
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
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('favorite', [
        'favoriteCities',
        'currentFavoriteCity',
        'favoriteCityIdForRemove',
      ]),
  },

  methods: {
    ...mapActions({
        getTodayWeather: 'weather/getTodayWeather'
      }),

      ...mapMutations('favorite', [
        'setFavoriteCurrentCity',
        'setFavoriteCityIdForRemove',
        'removeFavoriteCity',
      ]),
      
    handleTabClick(city) {
      this.setFavoriteCurrentCity(city.id);
      this.getTodayWeather(this.currentFavoriteCity.name);
    },

    handlePrepareCityToRemove() {
      this.setFavoriteCityIdForRemove(this.currentFavoriteCity.id);
    },

    handleCancelRemoveCity() {
      this.setFavoriteCityIdForRemove(false);
    },

    handleRemoveCity() {
      this.removeFavoriteCity();
    },
  },

  mounted() {
    if (this.favoriteCities.length) {
      const currentFavoriteCity = this.currentFavoriteCity.id || 1;

      this.this.setFavoriteCurrentCity(currentFavoriteCity);
      this.getTodayWeather(this.currentFavoriteCity.name);
    }

  }
}
</script>

<style lang="scss" scoped></style>
