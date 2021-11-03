import { App, ComponentOptions } from 'vue';
import * as commonIcons from './primitives/icons/common';
import * as brandIcons from './primitives/icons/brand';
import * as mediaIcons from './primitives/icons/media';

import AlbumGrid from './primitives/album/AlbumGrid.vue';
import ButtonPlay from './primitives/buttons/ButtonPlay.vue';
import CategoryGrid from './primitives/category/CategoryGrid.vue';
import FeaturedPlaylistGrid from './primitives/featured-playlist/FeaturedPlaylistGrid.vue';
import HistoryTrackGrid from './primitives/history-track/HistoryTrackGrid.vue';
import PlaylistTrackGrid from './primitives/playlist-track/PlaylistTrackGrid.vue';
import ItemGrid from './primitives/item/ItemGrid.vue';
import ItemGroupGrid from './primitives/item/group/ItemGroupGrid.vue';
import PlaylistGrid from './primitives/playlist/PlaylistGrid.vue';
import SongGrid from './primitives/song/SongGrid.vue';

export default {
  install(app: App): void {
    Object.keys(commonIcons)
      .forEach((key: string) => app.component(key, (commonIcons as { [key: string]: ComponentOptions })[key]));

    Object.keys(brandIcons)
      .forEach((key: string) => app.component(key, (brandIcons as { [key: string]: ComponentOptions })[key]));

    Object.keys(mediaIcons)
      .forEach((key: string) => app.component(key, (mediaIcons as { [key: string]: ComponentOptions })[key]));

    app.component('AlbumGrid', AlbumGrid);
    app.component('ButtonPlay', ButtonPlay);
    app.component('CategoryGrid', CategoryGrid);
    app.component('HistoryTrackGrid', HistoryTrackGrid);
    app.component('ItemGrid', ItemGrid);
    app.component('ItemGroupGrid', ItemGroupGrid);
    app.component('FeaturedPlaylistGrid', FeaturedPlaylistGrid);
    app.component('PlaylistGrid', PlaylistGrid);
    app.component('PlaylistTrackGrid', PlaylistTrackGrid);
    app.component('SongGrid', SongGrid);
  },
};