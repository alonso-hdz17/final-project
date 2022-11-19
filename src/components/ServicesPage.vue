<template>
  <div class="title">
    <h1>Hernandez Detailing Services<br /></h1>
  </div>
  <div class="message">
    At Hernandez Car Care we take pride in our work and always looks to provide the best service for their customers.<br />
    We offer all kinds of services like a simple wash-vac, interior & exterior detail, paint correction, ceramic coating
    and more.
  </div>

  <div class="container">
    <div class="wrapper">
      <div class="card-image"><img src="ceramic.jpg" /></div>
      <h1 class="card-title">Premium Package</h1>
      <p class="card-description">
        The premium package is our top of the line detailing package that will leave your vehicle looking like new!
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.title {
  @apply flex items-center justify-center text-6xl font-bold text-slate-300;
}

.message {
  @apply flex items-center justify-center py-9 text-lg  font-semibold text-slate-400;
}

.container {
  @apply flex h-1/2 w-2/6 cursor-pointer items-start justify-center rounded-md bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 p-5 text-center drop-shadow-lg transition-transform duration-300 hover:scale-100 hover:shadow-xl;
}
.wrapper {
  @apply h-4/6 w-3/4;
}
.card-image {
  @apply mx-auto h-full w-10/12 rounded-lg;
}
.card-title {
  @apply font-sans text-xl font-bold uppercase;
}
.card-description {
  @apply text-base font-medium;
}
</style>
