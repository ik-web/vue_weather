import { fetchCityNames } from '@/api/citiesAPI';
import { debounce, getCityNamesData } from './utils';

export default {
  state() {
    return {
      cityNames: [],
      cityNamesLoading: false,
      cityNamesError: '',
    };
  },

  mutations: {
    setCityNames(state, cityNames) {
      state.cityNames = cityNames;
    },

    setCityNamesLoading(state, loading) {
      state.cityNamesLoading = loading;
    },

    setCityNamesError(state, error) {
      state.cityNamesError = error;
    },
  },

  actions: {
    getCityNames: debounce(async ({ commit }, cityNames) => {
      commit('setCityNamesLoading', true);

      try {
        const response = await fetchCityNames(cityNames);
        const results = response.data.results;
        const cityNamesData = getCityNamesData(results)
        
        commit('setCityNames', cityNamesData);
        commit('setCityNamesError', '');
      } catch (error) {
        commit('setCityNamesError', error.message);
      } finally {
        commit('setCityNamesLoading', false);
      }
    }, 300),
  },

  namespaced: true,
};
