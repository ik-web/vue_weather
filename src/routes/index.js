import { createRouter, createWebHashHistory } from 'vue-router';

import HomePageVue from '@/views/HomePage.vue';
import FavoritePageVue from '@/views/FavoritePage.vue';

const routes = [
  {
    path: '/',
    component: HomePageVue
  },
  {
    path: '/:city',
    component: HomePageVue
  },
  {
    path: '/favorite',
    component: FavoritePageVue
  },
  {
    path: '/favorite/:city',
    component: FavoritePageVue
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
