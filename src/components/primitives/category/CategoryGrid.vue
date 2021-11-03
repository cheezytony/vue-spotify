<template>
  <ItemGrid :image="image">
    <template #title>
      {{ title }}
    </template>
  </ItemGrid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyImage, SpotifyCategory } from '@/types/spotify';

export default defineComponent({
  name: 'CategoryGrid',
  props: {
    item: {
      type: Object as PropType<SpotifyCategory>,
      required: true,
    },
  },
  computed: {
    image(): SpotifyImage | undefined {
      return this.item?.icons[0];
    },
    title(): string {
      return this.item?.name;
    },
  }
})
</script>
