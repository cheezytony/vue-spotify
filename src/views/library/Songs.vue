<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LibrarySongs',
  data() {
    return {};
  },
  computed: {},
  beforeMount() {
    this.$spotify.getMySavedTracks()
      .then((data: unknown) => {
        console.log(data);
      });
  },
  methods: {},
});
</script>
