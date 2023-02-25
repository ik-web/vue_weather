import { getNewItemId } from "@/utils";

export default {
  state () {
    return {
      currentCity: {},
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
      cityIdForRemove: null
    }
  },

  getters: {
    cityLimit(state) {
      return state.cities.length === 5;
    },
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
    },

    setCityIdForRemove(state, id = state.currentCity.id) {
      state.cityIdForRemove = id;
    },

    removeCity(state) {
      if (state.cities.length > 1) {
        state.cities = state.cities
          .filter((city) => city.id !== state.cityIdForRemove);
        state.currentCity = state.cities[state.cities.length - 1];
      }

      state.cityIdForRemove = null;
    },
  },

  namespaced: true
}
