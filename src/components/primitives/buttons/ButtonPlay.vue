<template>
  <button
    type="button"
    title="Play Song" 
    class="button__play"
  >
    <IconPlay />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonPlay',
})
</script>

