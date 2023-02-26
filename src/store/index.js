import { createStore } from 'vuex'

import city from './modules/city';
import favorite from './modules/favorite';
import weather from './modules/weather';
import cityNames from './modules/cityNames';

export const store = createStore({
  modules: {
    city,
    favorite,
    weather,
    cityNames
  }
});
