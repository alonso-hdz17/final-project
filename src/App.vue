<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <main>
    <NavMenu />
    <RouterView />
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply h-screen bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900;
}
</style>
