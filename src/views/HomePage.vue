<script setup>
import { ref } from 'vue'
const title = ref('Hernandez Car Care')
</script>

<template>
  <main class="flex items-start justify-start">
    <h1 class="px-5 font-mono text-6xl font-bold italic text-white">{{ title }}</h1>
  </main>
  <img class="image" img src="/public/car-detailing-business.jpg" />
</template>

<style lang="postcss" scoped>
.image {
  @apply mx-auto px-4 py-14 shadow-slate-900 drop-shadow-lg;
}
</style>
