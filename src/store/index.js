import { createStore } from 'vuex'

import cities from './modules/cities/cities';
import favorite from './modules/favorite/favorite';
import weather from './modules/weather/weather';
import cityNames from './modules/cityNames/cityNames';

export const store = createStore({
  modules: {
    cities,
    favorite,
    weather,
    cityNames
  }
});
