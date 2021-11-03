<template>
  <div>
    <template :key="featuredPlaylist.title" v-for="featuredPlaylist in playlists">
      <FeaturedPlaylistGrid :featured-playlist="featuredPlaylist" />
    </template>
  </div>
</template>

<script lang="ts">
import { FeaturedPlaylist, SpotifyCategory, SpotifyItem, SpotifyPaging, SpotifyPlayHistory, SpotifyResponse } from '@/types/spotify';
import { defineComponent } from 'vue';

type Data = {
  playlists: FeaturedPlaylist[],
}

export default defineComponent({
  data() {
    return {
      playlists: [],
    } as Data;
  },
  mounted() {
    document.title = 'Spotify';
 
    this.$spotify.getMyRecentlyPlayedTracks({
      country: 'NG',
    }).then((data: SpotifyPaging) => {
      this.playlists.push({
        title: 'Recently Played',
        playlist: this.transformHistoryTracks(data),
      });
    }, (response: Response) => {
      console.log(response);
    });

    this.$spotify.getFeaturedPlaylists({
      country: 'NG',
    }).then((data: SpotifyResponse) => {
      if (data.playlists) {
        this.playlists.push({
          title: 'Editor\s Picks',
          playlist: data.playlists,
        });
      }
    }, (response: Response) => {
      console.log(response);
    });

    this.$spotify.getNewReleases({
      country: 'NG',
    }).then((data: SpotifyResponse) => {
      if (data.albums) {
        this.playlists.push({
          title: 'New Releases',
          playlist: data.albums,
        });
      }
    }, (response: Response) => {
      console.log(response);
    });

    this.$spotify.getCategories().then((data: SpotifyResponse) => {
      if (data.categories) {
        this.playlists.push({
          title: 'Genres',
          playlist: this.transformCategories(data.categories),
        });
      }
    });
  },
  methods: {
    transformCategories(categories: SpotifyPaging): SpotifyPaging {
      return {
        ...categories,
        items: categories.items.map((category: SpotifyItem) => {
          return { ...category, type: 'category' } as SpotifyCategory;
        }),
      };
    },
    transformHistoryTracks(history: SpotifyPaging): SpotifyPaging {
      return {
        ...history,
        items: history.items.map((playHistory: SpotifyItem) => {
          return { ...playHistory, type: 'historyTrack' } as SpotifyPlayHistory;
        }),
      };
    }
  }
});
</script>
