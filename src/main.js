import { createApp } from 'vue';
import App from './App.vue';

import './styles/main.scss';
import router from './routes';
import { components } from './components';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app
app.use(router)
.mount('#app');
