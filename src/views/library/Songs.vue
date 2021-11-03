<template>
  <div>
    <FeaturedPlaylistGrid
      v-if="!isLoading"
      :multiline-grid="true"
      :featured-playlist="tracks"
    />
  </div>
</template>

<script lang="ts">
import { FeaturedPlaylist, SpotifyPaging, SpotifyPlaylistTrack } from '@/types/spotify';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LibrarySongs',
  data() {
    return {
      tracks: {},
      isLoading: true,
    } as { tracks: FeaturedPlaylist, isLoading: boolean };
  },
  computed: {},
  beforeMount() {
    this.$spotify.getMySavedTracks({
      limit: 50,
    })
      .then((data: SpotifyPaging & { items: SpotifyPlaylistTrack[] }) => {
        this.tracks = {
          title: 'Saved Tracks',
          playlist: {
            ...data,
            items: data.items.map((item: SpotifyPlaylistTrack) => ({ ...item, type: 'playlistTrack' } as SpotifyPlaylistTrack)),
          },
        };

        this.isLoading = false;
      });
  },
  methods: {},
});
</script>
