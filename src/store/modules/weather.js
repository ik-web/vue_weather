import { getWeather } from "@/utils";
import { fetchWeather } from "@/api/weatherAPI";

export default {
  state() {
    return {
      currentWeather: {}
    }
  },

  mutations: {
    setCurrentWeather(state, weather) {
      state.currentWeather = weather;
    }
  },

  actions: {
    async getWeather({ commit }, cityName) {
      try {
        const data = await fetchWeather(cityName)
        const weather = getWeather(data.data);
        commit('setCurrentWeather', weather);
      } catch(error) {
        return error.message;
      }
    }
  },

  namespaced: true
}
