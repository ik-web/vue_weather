import { createStore } from 'vuex'

import city from './modules/city';
import favorite from './modules/favorite';

export const store = createStore({
  modules: {
    city,
    favorite
  }
});
