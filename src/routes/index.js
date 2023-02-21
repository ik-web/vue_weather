import { createRouter, createWebHashHistory } from 'vue-router';

import HomePageVue from '@/views/HomePage.vue';
import FavoritePageVue from '@/views/FavoritePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageVue
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoritePageVue
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
