import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import FavoritePage from '@/views/FavoritePage.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/favorites',
    component: FavoritePage
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
