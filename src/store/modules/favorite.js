export default {
  state () {
    return {
      currentFavoriteCity: {},
      favoriteCities: [
        {
          id: 1,
          name: 'Kyiv',
          path: '/favorite/kyiv'
        },
        {
          id: 2,
          name: 'Kharkiv',
          path: '/favorite/kharkiv'
        }
      ],
      favoriteCityIdForRemove: null
    }
  },

  getters: {
    favoriteLityLimit(state) {
      return state.favoriteCities.length === 5;
    },
  },

  mutations: {
    setFavoriteCurrentCity(state, cityId) {
      state.currentFavoriteCity = state.favoriteCities
        .find((city) => city.id === cityId);
    },

    addFavoriteCity() {
 
    },

    setFavoriteCityIdForRemove() {

    },

    removeFavoriteCity() {

    },
  },
  namespaced: true
}
