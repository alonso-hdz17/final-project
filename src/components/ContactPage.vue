<template>
  <div class="wrapper">
    <h1>Contact Us!</h1>
  </div>
  <div class="message">
    <p>
      If you have any questions about pricing or would like to book an appointment. Feel free to contact us. Below is
      our phone number, email address, and hours of operation.
    </p>
  </div>
  <section class="cards">
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/phone.svg" alt="logo" />
        <p class="category">Phone</p>
        <h2>Phone Number</h2>
        <p>(956)123-4567</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/email.svg" alt="logo" />
        <p class="category">Email</p>
        <h2>Email Address</h2>
        <p>example@example.com</p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="logo" img src="/hours.svg" alt="logo" />
        <p class="category">Hours of Operation</p>
        <h2>Hours</h2>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply text-center text-6xl font-bold text-white;
}
.message {
  @apply py-2 text-center text-base font-medium italic text-white;
}
.cards {
  @apply mx-auto grid h-3/4 w-3/4 auto-rows-auto grid-cols-3 gap-4 py-28;
}
.logo {
  @apply mx-auto h-1/2 w-1/2;
}
.card {
  @apply rounded border-2 bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 p-5 text-center drop-shadow-lg transition-transform duration-300 hover:scale-100 hover:shadow-xl;
}
.card-content {
  @apply flex flex-col text-sm;
}
.category {
  @apply text-base font-semibold uppercase text-red-500;
}
</style>
