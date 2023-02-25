<template>
  <delete-confirm
    v-if="cityIdForRemove"
    :onCancel="handleCancelRemoveCity"
    :onRemove="handleRemoveCity"
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
import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('city', [
        'cities',
        'currentCity',
        'cityIdForRemove',
      ]),

      ...mapState('favorite', [
        'favoriteCities',
        'favoriteCityIdForRemove',
      ]),

      ...mapGetters('city', [
        'cityLimit',
      ]),

      isFavoriteCity() {
        return this.favoriteCities
          .some((city) => city.name === this.currentCity.name);
      }
    },

    methods: {
      ...mapActions({
        getWeather: 'weather/getWeather'
      }),

      handleTabClick(city) {
        this.$store.commit('city/setCurrentCity', city.id);
        this.getWeather(this.currentCity.name);
      },

      handleAddTab() {
        if (!this.cityLimit) {
          this.$store.commit('city/addCity');
        }
      },

      handlePrepareCityToRemove() {
        this.$store.commit('city/setCityIdForRemove');
      },

      handleCancelRemoveCity() {
        this.$store.commit('city/setCityIdForRemove', false);
      },

      handleRemoveCity() {
        this.$store.commit('city/removeCity');
        this.$router.push(this.currentCity.path);
      },

      handleAddFavoriteCity() {
        if (!this.isFavoriteCity) {
          this.$store.commit('favorite/addFavoriteCity', this.currentCity);
        }
      },
    },

    mounted() {
      const currentCityId = this.currentCity.id || 1
      this.$store.commit('city/setCurrentCity', currentCityId);
      this.$router.push(this.currentCity.path);

      this.getWeather(this.currentCity.name);
    }
  }
</script>

<style lang="scss" scoped></style>
