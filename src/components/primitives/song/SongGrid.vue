<template>
  <ItemGrid :artist="artist" :image="image">
    <template #title>
      {{ title }}
    </template>
  </ItemGrid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyArtist, SpotifyImage, SpotifyTrack } from '@/types/spotify';

export default defineComponent({
  name: 'SongGrid',
  props: {
    item: {
      type: Object as PropType<SpotifyTrack>,
      required: true,
    },
  },
  computed: {
    image(): SpotifyImage | undefined {
      return this.item.album?.images[0];
    },
    title(): string {
      return this.item?.name;
    },
    artist(): SpotifyArtist {
      return this.item?.artists[0];
    },
  }
})
</script>
