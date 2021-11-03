<template>
  <section class="app__main__section">
    <h2>{{ title }}</h2>
    
    <ItemGroupGrid :items="items" :class="{ 'multiline': multilineGrid }" />
  </section>
</template>

<script lang="ts">
import { FeaturedPlaylist, SpotifyItemList } from '@/types/spotify';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FeaturedPlaylistGrid',
  props: {
    featuredPlaylist: {
      type: Object as PropType<FeaturedPlaylist>,
      required: true,
    },
    multilineGrid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    title(): string {
      return this.featuredPlaylist?.title;
    },
    items(): SpotifyItemList {
      return this.featuredPlaylist.playlist.items;
    },
  },
})
</script>
