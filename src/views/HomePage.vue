<template>
  <app-layout pageName="Home">
    <weather-card>
      <template #card-header>
        <card-form />
      </template>

      <template #card-cityTabs>
        <!-- newTab - these are props of type Object that contain the 'onClick' key
        to add a function that will be executed when the button is clicked.
        'isTabLimit' - a boolean key to disable the button if there is a tab limit
        Example { onClick: fn(), isTabLimit: false }
        newTabColor - an optional props to change this tab's color. -->
        <app-tabs newTabColor="blue" :newTab="newTab">
          <app-tab
            v-for="city in cities"
            :tab="city"
            :key="city.id"
            :activeTab="currentCity.id === city.id"
            @click="() => handleTabClick(city)"
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
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState
} from 'vuex';

  export default {
    computed: {
      ...mapState([
        'currentCity',
        'cities',
      ]),

      ...mapGetters([
        'cityLimit'
      ]),

      ...mapMutations([
        'setCurrentCity',
        'addCity'
      ]),

      ...mapActions([
        'fetchWeather'
      ]),

      newTab() {
        return {
          isTabLimit: (() => this.cityLimit)(),
          onClick: () => {
            this.$store.commit('addCity');
          }
        }
      }
    },

    methods: {
      handleTabClick(city) {
        this.$store.commit('setCurrentCity', city.id);
      }
    },

    mounted() {
      this.$store.commit('setCurrentCity', 1);
      this.$router.push(this.currentCity.path);
    }
  }
</script>

<style lang="scss" scoped></style>
