<script setup>
import { ref } from 'vue'
const title = ref('Hernandez Car Care')
</script>

<template>
  <main class="flex items-start justify-start">
    <h1 class="px-5 font-mono text-6xl font-bold text-white">{{ title }}</h1>
  </main>
  <img class="image" img src="car-detailing-business.jpg" />
  <div class="welcome">Welcome to Hernandez Car Care!</div>
  <div class="text">
    Hernandez Car Care is a professional car care service dedicated to keeping your car looking like new.
  </div>
</template>

<style lang="postcss" scoped>
.image {
  @apply mx-auto h-80 px-4 py-10;
}
.welcome {
  @apply flex items-center justify-center;
}
.text {
  @apply flex items-center justify-center py-5;
}
</style>
