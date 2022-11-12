<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/">Services</RouterLink>
    <RouterLink to="/">Contact Us</RouterLink>
    <RouterLink to="/">Login</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex items-end justify-end space-x-4 px-5 py-9 text-slate-300;
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
