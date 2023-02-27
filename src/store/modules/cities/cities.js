import { getNewItemId } from "@/utils";

export default {
  state () {
    return {
      cities: [
        {
          id: 1,
          name: 'Kyiv'
        }
      ],
      citiesLimit: 5,
      defaultCityCount: 1,
      currentCity: {},
      cityIdForRemove: null,
    }
  },

  getters: {
    cityLimit(state) {
      return state.cities.length === state.citiesLimit;
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

    changeCity(state, cityName) {
      const changedCity = {
        ...state.currentCity,
        name: cityName[0].toUpperCase() + cityName.slice(1)
      }

      state.cities = state.cities
        .map((city) => city.id === state.currentCity.id ? changedCity : city);
      state.currentCity = changedCity;
    },

    setCityIdForRemove(state, id = state.currentCity.id) {
      state.cityIdForRemove = id;
    },

    removeCity(state) {
      if (state.cities.length > state.defaultCityCount) {
        state.cities = state.cities
          .filter((city) => city.id !== state.cityIdForRemove);
        state.currentCity = state.cities[state.cities.length - 1];
      }

      state.cityIdForRemove = null;
    },
  },

  namespaced: true
}
