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
  @apply flex h-screen bg-cyan-400;
}
</style>
