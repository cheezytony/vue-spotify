<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as config from '@/app.config.json';
import { RouteLocationNormalized } from "vue-router";
import { setItem } from '@/plugins/local-storage';

type Query = {
  [key: string]: unknown
};

export default defineComponent({
  beforeRouteEnter(
    route: RouteLocationNormalized
  ) {
    if (!route.hash) {
      const { clientId }: { clientId: string } = config;
      const redirectUri = window.location.origin + '/login';
      const scopes = [
        'user-read-private',
        'user-read-email',
        'user-library-read',
        'user-read-private',
        'user-follow-read',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-read-playback-position',
        'user-top-read',
        'user-follow-modify',
        'user-modify-playback-state',
        'user-read-recently-played',
        'playlist-read-collaborative',
        'playlist-modify-private',
        'playlist-read-private',
        'playlist-modify-public',
        'ugc-image-upload',
      ].join(' ');
      
      const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes}`;
      window.location.assign(url);
    }
  },
  beforeMount() {
    if (this.$route.hash) {
      this.login();
    }
  },
  methods: {
    login() {
      const query: Query = {};
      const queries = this.$route.hash.replace(/^#/, '')?.split('&');

      queries.forEach((q) => {
        const key = q.split('=')[0];
        const value = q.split('=').pop();
        query[key] = value;
      });

      if (!query.access_token) {
        return;
      }

      setItem('spotify-user', query);

      this.$router.push({ name: 'Home' });
    }
  },
});
</script>