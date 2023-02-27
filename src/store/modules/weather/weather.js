import { fetchTodayWeather } from '@/api/weatherAPI';
import { getTodayWeather } from './utils';

export default {
  state() {
    return {
      todayWeather: {},
      todayWeatherLoading: false,
      todayWeatherError: '',
    };
  },

  mutations: {
    setTodayWeather(state, weather) {
      state.todayWeather = weather;
    },

    setTodayWeatherLoading(state, loading) {
      state.todayWeatherLoading = loading;
    },

    setTodayWeatherError(state, error) {
      state.todayWeatherError = error;
    },
  },

  actions: {
    async getTodayWeather({ commit }, cityName) {
      commit('setTodayWeatherLoading', true);

      try {
        const response = await fetchTodayWeather(cityName);
        const weather = getTodayWeather(response.data);

        commit('setTodayWeatherError', '');
        commit('setTodayWeather', weather);
      } catch (error) {
        commit('setTodayWeatherError', error.message);
      } finally {
        commit('setTodayWeatherLoading', false);
      }
    },
  },

  namespaced: true,
};
