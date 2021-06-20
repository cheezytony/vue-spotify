<template>
  <div class="app">
    <div class="app__content">
      <Sidebar />
      <div class="app__main">
        <Header />
        <RouterView />
      </div>
    </div>
    <NowPlaying />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Sidebar from '../components/sections/app/Sidebar.vue';
import Header from '../components/sections/app/Header.vue';
import NowPlaying from '../components/sections/app/now-playing/FooterWidget.vue';

export default defineComponent({
  components: {
    Sidebar,
    Header,
    NowPlaying,
  },
});
</script>
