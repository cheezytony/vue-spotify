<template>
  <div class="song song--grid">
    <div class="song__data">
      <div class="song__album__art">
        <img :src="url" alt="name" height="140" width="140" />
      </div>
      <div class="song__title">{{ name }}</div>
      <div class="song__artist">{{ artist }}</div>
    </div>
    <ButtonPlay class="song__play" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type ItemImage = {
  url: string,
}

interface Item {
  name: string
  owner: {
    display_name: string
  },
  images: ItemImage[],
  icons: ItemImage[],
}

export default defineComponent({
  name: 'SongGrid',
  props: {
    song: {
      type: Object as PropType<Item>,
      required: true,
    },
  },
  computed: {
    name(): string {
      return this.song?.name;
    },
    artist(): string {
      return this.song?.owner?.display_name;
    },
    url(): string {
      return this.song?.images?.[0]?.url || this.song?.icons?.[0]?.url;
    },
  }
})
</script>
