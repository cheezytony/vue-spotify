import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import components from './components';
import spotify from './plugins/spotify';
import "@/assets/sass/app.scss";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(components)
  .use(spotify)
  .mount('#app');

router.app = app;
