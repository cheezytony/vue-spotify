<template>
  <section class="app__main__section">
    <h2>{{ message }}</h2>
    
    <div class="songs songs--grid">
      <template :key="song.name" v-for="song in songs">
        <SongGrid :song="song" />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PlaylistGrid',
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
  computed: {
    message(): string {
      return this.playlist?.message;
    },
    songs(): [] {
      return this.playlist?.items;
    },
  },
})
</script>
