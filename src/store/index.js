import { createStore } from 'vuex'

import city from './modules/city/city';
import favorite from './modules/favorite/favorite';
import weather from './modules/weather/weather';
import cityNames from './modules/cityNames/cityNames';

export const store = createStore({
  modules: {
    city,
    favorite,
    weather,
    cityNames
  }
});
