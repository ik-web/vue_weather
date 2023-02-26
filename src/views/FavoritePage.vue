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
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      favoriteCities: state => state.favorite.favoriteCities,
      currentFavoriteCity: state => state.favorite.currentFavoriteCity,
      favoriteCityIdForRemove: state => state.favorite.favoriteCityIdForRemove
    })
  },

  methods: {
    ...mapActions({
        getTodayWeather: 'weather/getTodayWeather'
      }),
      
    handleTabClick(city) {
      this.$store.commit('favorite/setFavoriteCurrentCity', city.id);
    },

    handlePrepareCityToRemove() {
      this.$store
        .commit('favorite/setFavoriteCityIdForRemove', this.currentFavoriteCity.id);
    },

    handleCancelRemoveCity() {
      this.$store.commit('favorite/setFavoriteCityIdForRemove', false);
    },

    handleRemoveCity() {
      this.$store.commit('favorite/removeFavoriteCity');

      if (this.favoriteCities.length) {
        this.$router.push(this.currentFavoriteCity.path);
      } else {
        this.$router.push('/favorite');
      }
    },
  },

  mounted() {
    if (this.favoriteCities.length) {
      const currentFavoriteCity = this.currentFavoriteCity.id || 1;

      this.$store.commit('favorite/setFavoriteCurrentCity', currentFavoriteCity);
      this.$router.push(this.currentFavoriteCity.path);
      this.getTodayWeather(this.currentFavoriteCity.name);
    }

  }
}
</script>

<style lang="scss" scoped></style>
