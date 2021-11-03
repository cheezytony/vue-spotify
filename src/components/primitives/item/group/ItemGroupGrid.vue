<template>
  <div class="items items--grid">
    <template :key="index" v-for="(item, index) in items">
      <Component :is="$filters.itemType(item, 'Grid')" :item="item" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SpotifyItemList } from '@/types/spotify';

export default defineComponent({
  name: 'ItemGroupGrid',
  props: {
    items: {
      type: Array as PropType<SpotifyItemList>,
      required: true,
    },
  },
});
</script>
