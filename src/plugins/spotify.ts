import { App } from 'vue';
import SpotifyWebApi from 'spotify-web-api-js';

export default {
  install(app: App): void {
    const Spotify = new SpotifyWebApi()
    app.config.globalProperties.$spotify = Spotify;
  },
};
