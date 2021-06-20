import { App, ComponentOptions } from 'vue';
import * as commonIcons from './primitives/icons/common';
import * as brandIcons from './primitives/icons/brand';
import * as mediaIcons from './primitives/icons/media';

import ButtonPlay from './primitives/buttons/Play.vue';
import PlaylistGrid from './primitives/playlist/Grid.vue';
import SongGrid from './primitives/song/Grid.vue';

export default {
  install(app: App): void {
    Object.keys(commonIcons)
      .forEach((key: string) => app.component(key, (commonIcons as { [key: string]: ComponentOptions })[key]));

    Object.keys(brandIcons)
      .forEach((key: string) => app.component(key, (brandIcons as { [key: string]: ComponentOptions })[key]));

    Object.keys(mediaIcons)
      .forEach((key: string) => app.component(key, (mediaIcons as { [key: string]: ComponentOptions })[key]));

    app.component('ButtonPlay', ButtonPlay);

    app.component('PlaylistGrid', PlaylistGrid);

    app.component('SongGrid', SongGrid);
  },
};