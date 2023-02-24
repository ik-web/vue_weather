import { createApp } from 'vue';
import App from './App.vue';

import './styles/main.scss';
import router from './routes';
import { store } from './store';
import { components } from './components';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app
  .use(router)
  .use(store) 
  .mount('#app');
