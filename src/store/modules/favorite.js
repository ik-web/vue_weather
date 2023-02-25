import { getNewItemId } from "@/utils";

export default {
  state () {
    return {
      currentFavoriteCity: {},
      favoriteCities: [],
      favoriteCityIdForRemove: null
    }
  },

  getters: {
    favoriteCityLimit(state) {
      return state.favoriteCities.length === 5;
    },
  },

  mutations: {
    setFavoriteCurrentCity(state, cityId) {
      state.currentFavoriteCity = state.favoriteCities
        .find((city) => city.id === cityId);
    },

    addFavoriteCity(state, city) {
      const favoriteCity = {
        name: city.name,
        path: `/favorite/${city.name.toLowerCase()}`,
        id: getNewItemId(state.favoriteCities)
      }

      state.favoriteCities.push(favoriteCity);
    },

    setFavoriteCityIdForRemove(state, cityId) {
      state.favoriteCityIdForRemove = cityId
    },

    removeFavoriteCity(state) {
      state.favoriteCities = state.favoriteCities
        .filter((city) => city.id !== state.favoriteCityIdForRemove);
      state.currentFavoriteCity = state.favoriteCities[state.favoriteCities.length - 1] || {};
      state.favoriteCityIdForRemove = null;
    },
  },

  namespaced: true
}
