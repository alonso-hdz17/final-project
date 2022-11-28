<template>
  <div class="welcome">Welcome to Hernandez Car Care!</div>
  <img class="image" img src="/public/car-detailing-business.jpg" />
  <div class="text">
    Hernandez Car Care is a professional car care service dedicated to keeping your car looking like new. <br />We are
    committed to provide our customers with a great experience and help them protect their investment!
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
  @apply flex items-center justify-center py-5 text-center font-semibold text-slate-50;
}
</style>
