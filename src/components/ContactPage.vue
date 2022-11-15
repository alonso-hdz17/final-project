<template>
  <div class="wrapper">
    <h1>Contact Us!</h1>
  </div>
  <div>
    <div class="phone">Phone Number</div>
    <h4 class="number">(956) 123-4567</h4>
  </div>

  <div>
    <div class="email">Email</div>
    <h3 class="address">example@address.com</h3>
  </div>
  <div class="hours">Hours of Operation:</div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply items-start justify-start px-5 text-6xl font-bold text-yellow-400;
}
.phone {
  @apply items-start justify-start py-10 px-5 text-3xl font-semibold  text-yellow-300;
}
.number {
  @apply px-5 text-lg text-yellow-300 underline;
}
.email {
  @apply items-start justify-start py-8 px-5 text-3xl font-semibold text-yellow-300;
}
.address {
  @apply px-5 text-lg text-yellow-300 underline;
}
.hours {
  @apply items-start justify-start py-8 px-5 text-3xl font-semibold text-yellow-300;
}
</style>
