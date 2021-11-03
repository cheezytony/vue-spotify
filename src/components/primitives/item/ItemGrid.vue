<template>
  <div class="item item--grid">
    <div class="item__data">
      <div class="item__artwork">
        <img :src="url" alt="name" height="140" width="140" />
      </div>
      <div class="item__title">
        <slot name="title" />
      </div>
      <div class="item__owner">
        {{ ownerName }}
      </div>
    </div>
    <ButtonPlay
      v-if="canPlay"
      class="item__play"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyArtist, SpotifyImage, SpotifyPublicUser } from '@/types/spotify';

export default defineComponent({
  name: 'GridItem',
  props: {
    artist: {
      type: Object as PropType<SpotifyArtist>
    },
    image: {
      type: Object as PropType<SpotifyImage>,
      required: true,
    },
    owner: {
      type: Object as PropType<SpotifyPublicUser>
    },
  },
  computed: {
    canPlay(): boolean {
      return true;
    },
    ownerName(): string | undefined {
      if (this.artist) {
        return this.artist.name;
      }

      if (this.owner) {
        return this.owner.display_name;
      }

      return undefined;
    },
    url(): string {
      return this.image?.url;
    },
  },
});
</script>
