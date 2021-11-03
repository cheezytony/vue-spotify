<template>
  <ItemGrid :artist="artist" :image="image">
    <template #title>
      {{ title }}
    </template>
  </ItemGrid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyImage, SpotifyAlbum, SpotifyArtist } from '@/types/spotify';

export default defineComponent({
  name: 'AlbumGrid',
  props: {
    item: {
      type: Object as PropType<SpotifyAlbum>,
      required: true,
    },
  },
  computed: {
    image(): SpotifyImage | undefined {
      return this.item.images[0];
    },
    title(): string {
      return this.item.name;
    },
    artist(): SpotifyArtist {
      return this.item.artists[0];
    },
  }
})
</script>
