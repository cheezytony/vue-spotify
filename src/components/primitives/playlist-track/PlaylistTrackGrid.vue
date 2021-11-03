<template>
  <SongGrid :item="track" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyImage, SpotifyPlaylistTrack, SpotifyTrack } from '@/types/spotify';

export default defineComponent({
  name: 'PlaylistTrackGrid',
  props: {
    item: {
      type: Object as PropType<SpotifyPlaylistTrack>,
      required: true,
    },
  },
  computed: {
    image(): SpotifyImage | undefined {
      return this.track.album?.images[0];
    },
    title(): string {
      return this.track?.name;
    },
    track(): SpotifyTrack {
      return this.item.track;
    },
    artist(): string {
      return this.track?.artists[0]?.name;
    },
  }
})
</script>
