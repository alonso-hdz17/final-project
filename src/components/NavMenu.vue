<template>
  <nav>
    <div class="title">Hernandez Car Care</div>
    <div class="menu-item"><router-link :to="{ name: 'Home' }">Home</router-link></div>
    <div class="menu-item"><router-link :to="{ name: 'Services' }">Services</router-link></div>
    <div class="menu-item"><router-link :to="{ name: 'Contact' }">Contact</router-link></div>
    <div class="menu-item"><router-link :to="{ name: 'Login' }">Login</router-link></div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex items-start justify-between space-x-2 px-5 py-4 text-slate-300;
  .title {
    @apply text-lg font-bold;
  }
  .menu-item {
    @apply items-end justify-end font-semibold;
  }
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
