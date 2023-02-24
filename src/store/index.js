import { createStore } from 'vuex'

import { getCurrentDate, getNewItemId } from '@/utils';

export const store = createStore({
  state () {
    return {
      weather: {},
      weatherLoading: false,
      weatherError: '',

      currentCity: {},
      currentDate: getCurrentDate(),
      cities: [
        {
          id: 1,
          name: 'Kyiv',
          path: '/kyiv'
        },
        {
          id: 2,
          name: 'Kharkiv',
          path: '/kharkiv'
        }
      ],
    }
  },

  getters: {
    cityLimit(state) {
      return state.cities.length === 5;
    },

    favoriteCityLimit(state) {
      return state.cities.length === 5;
    }
  },

  mutations: {
    setCurrentCity(state, cityId) {
      state.currentCity = state.cities.find((city) => city.id === cityId);
    },

    addCity(state) {
      const city = {
        ...state.currentCity,
        id: getNewItemId(state.cities)
      }

      state.cities.push(city);
      state.currentCity = city;
    }
  },

  actions: {},

  modules: {}
});
