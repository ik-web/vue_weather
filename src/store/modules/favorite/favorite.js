import { getNewItemId } from "@/utils";

export default {
  state () {
    return {
      currentFavoriteCity: {},
      favoriteCities: [],
      favoriteCitiesLimit: 5,
      favoriteCityIdForRemove: null
    }
  },

  getters: {
    favoriteCityLimit(state) {
      return state.favoriteCities.length === state.favoriteCitiesLimit;
    },
  },

  mutations: {
    setFavoriteCurrentCity(state, cityId) {
      if (cityId) {
        state.currentFavoriteCity = state.favoriteCities
          .find((city) => city.id === cityId);
      } else {
        state.currentFavoriteCity = state.favoriteCities[0];
      }
    },

    initFavoriteCities(state) {
      const favoriteCitiesJson = localStorage.getItem('favoriteCities');

      if (favoriteCitiesJson) {
        const favoriteCities = JSON.parse(favoriteCitiesJson);
  
        if (favoriteCities.length) {
          state.favoriteCities = favoriteCities;
        }
      }
    },

    addFavoriteCity(state, city) {
      const favoriteCity = {
        name: city.name,
        id: getNewItemId(state.favoriteCities)
      }

      state.favoriteCities.push(favoriteCity);

      localStorage.setItem(
        'favoriteCities',
        JSON.stringify(state.favoriteCities)
      );
    },

    setFavoriteCityIdForRemove(state, cityId) {
      state.favoriteCityIdForRemove = cityId
    },

    removeFavoriteCity(state) {
      state.favoriteCities = state.favoriteCities
        .filter((city) => city.id !== state.favoriteCityIdForRemove);

      state.currentFavoriteCity = state.favoriteCities[state.favoriteCities.length - 1] || {};
      state.favoriteCityIdForRemove = null;

      localStorage.removeItem('favoriteCities');
      localStorage.setItem(
        'favoriteCities',
        JSON.stringify(state.favoriteCities)
      );

      if (!state.favoriteCities.length) {
        localStorage.removeItem('favoriteCities');
      }
    },
  },

  namespaced: true
}
