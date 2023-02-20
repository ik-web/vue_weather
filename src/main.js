import { createApp } from 'vue';
import App from './App.vue';

import './styles/main.scss';
import { components } from './components';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.mount('#app');
