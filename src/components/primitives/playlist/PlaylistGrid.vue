<template>
  <ItemGrid :owner="artist" :image="image">
    <template #title>
      {{ title }}
    </template>
  </ItemGrid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyImage, SpotifyPublicUser, SpotifyPlaylist } from '@/types/spotify';

export default defineComponent({
  name: 'PlaylistGrid',
  props: {
    item: {
      type: Object as PropType<SpotifyPlaylist>,
      required: true,
    },
  },
  computed: {
    image(): SpotifyImage | undefined {
      return this.item?.images[0];
    },
    title(): string {
      return this.item?.name;
    },
    artist(): SpotifyPublicUser {
      return this.item.owner;
    },
  }
})
</script>
