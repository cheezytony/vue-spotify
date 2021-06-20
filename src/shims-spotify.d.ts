import '../node_modules/spotify-web-api-js/src/typings/spotify-web-api.d.ts';
import SpotifyWebApi from 'spotify-web-api-js';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $spotify: SpotifyWebApi
  }
}
