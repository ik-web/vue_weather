<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div>
      <input
        type="text"
        name="city"
        placeholder="Find city"
        class="form__input"
        :value="inputQuery"
        @input="handleInput"
      />

      <ul
        class="form__inputDropdown"
        v-if="cityNames.length"
      >
        <li
          v-for="cityName
          in cityNames"
          :key="cityName.id"
          class="form__inputDropdownItem"
          @click="() => handleDropItem(cityName.place)"
          type="submit"
        >
          {{ `${cityName.place}, ${cityName.formatted}` }}
        </li>
      </ul>
    </div>

    <app-button class="form__button button_right">
      <img src="icons/buttons/search.svg" alt="Search icon">
    </app-button>
  </form>
</template>

<script>
import {
  mapActions,
  mapMutations,
  mapState
} from 'vuex';

  export default {
    name: 'find-city',
    data() {
      return {
        inputQuery: ''
      }
    },
    computed: {
      ...mapState('cityNames', [
        'cityNames'
      ]),
    },
    methods: {
      ...mapMutations('cities', [
        'changeCity'
      ]),

      ...mapActions('weather', [
        'getTodayWeather'
      ]),

      ...mapActions('cityNames', [
        'getCityNames'
      ]),

      ...mapMutations('cityNames', [
        'setCityNames'
      ]),

      handleInput(e) {
        this.inputQuery = e.target.value;

        const isMakeRequest =
          this.inputQuery.trim() && this.inputQuery.trim().length > 1;

        if (isMakeRequest) {
          this.getCityNames(this.inputQuery);
        } else {
          this.setCityNames([]);
        }
      },

      handleSubmit() {
        if (this.inputQuery.trim()) {
          this.changeCity(this.inputQuery.trim());
          this.getTodayWeather(this.inputQuery);
        }

        this.inputQuery = '';
        this.setCityNames([]);
      },

      handleDropItem(inputQuery) {
        this.inputQuery = inputQuery;
        this.handleSubmit();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './FindCity.scss';
</style>
