<template>
  <div class="welcome">Welcome to Hernandez Car Care!</div>
  <img class="image" img src="/public/car-detailing-business.jpg" />
  <div class="text">
    Hernandez Car Care is a professional car care service dedicated to keeping your car looking like new. We started our
    company back in 2020.
  </div>
</template>

<style lang="postcss" scoped>
.image {
  @apply mx-auto h-80 px-4 py-2;
}
.welcome {
  @apply flex items-center justify-center py-6 text-3xl font-bold text-slate-50;
}
.text {
  @apply flex items-center justify-center py-5 font-semibold text-slate-50;
}
</style>
