<template>
  <div>
    <template :key="playlist.message" v-for="playlist in playlists">
      <PlaylistGrid :playlist="playlist" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Data = {
  playlists: unknown[],
}

export default defineComponent({
  data() {
    return {
      playlists: []
    } as Data;
  },
  mounted() {
    document.title = 'Spotify';
    
    type SpotifyResponse = {
      message: string,
      playlists?: {
        href: string,
        items: [],
        limit: number,
        next: string | null,
        offset: number,
        previous: string | null,
        total: number,
      },
      categories?: {
        href: string,
        items: [],
        limit: number,
        next: string | null,
        offset: number,
        previous: string | null,
        total: number,
      }
    };
    
    this.$spotify.getFeaturedPlaylists({
      country: 'NG',
    }).then((data: SpotifyResponse) => {
      this.playlists.push(data.playlists);
    }, (response: Response) => {
      console.log(response);
    });

    // this.$spotify.getNewReleases({
    //   country: 'NG',
    // }).then((data: SpotifyResponse) => {
    //   console.log(data);
    // }, (response: Response) => {
    //   console.log(response);
    // });

    this.$spotify.getCategories().then((data: SpotifyResponse) => {
      this.playlists.push(data.categories);
      console.log(data);
    });
  }
});
</script>
