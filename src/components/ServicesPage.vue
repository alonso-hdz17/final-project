<template>
  <div class="title">
    <h1>Hernandez Detailing Services<br /></h1>
  </div>
  <div class="message">
    At Hernandez Car Care we take pride in our work and always looks to provide the best service for their customers.<br />
    We offer all kinds of services like a simple wash-vac, interior & exterior detail, paint correction, ceramic coating
    and more.<br />All of our prices are based on the condition of the vehicle.
  </div>

  <section class="cards">
    <div class="card">
      <div class="card-content">
        <img class="card-image" img src="/public/ceramic.jpg" />
        <h1 class="card-title">Gold Detailing Package</h1>
        <p class="card-description">
          The Premium Detailing Package is our top of the line detailing package that will leave your vehicle looking
          like new! This package includes an interior/exterior detail, carpet extraction, paint correction, and ceramic
          coating.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="card-image" img src="/public/interior.jpg" />
        <h1 class="card-title">Bronze Detailing Package</h1>
        <p class="card-description">
          The Bronze Detailing Package is our most popular service amongst our customers. This package includes a full
          exterior detail of your vehicle. This includes a full hand wash of all exterior surfaces topped off with a
          paint sealant or wax.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <img class="card-image" img src="/public/polish.jpg" />
        <h1 class="card-title">Silver Detailing Package</h1>
        <p class="card-description">
          The Deluxe Detailing Package includes everything from the Bronze Package as well as a paint correction and
          scratch removal of your vehicle's paint. You have the option to choose between a One-Step or Two-Step paint
          correction (depending on the condition of your vehicle.)
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.title {
  @apply flex items-center justify-center text-5xl font-bold text-slate-300;
}

.message {
  @apply flex items-center justify-center py-4 text-lg  font-semibold text-slate-400;
}

.cards {
  @apply mx-auto grid h-1/2 w-11/12 auto-rows-auto grid-cols-3 gap-2;
}
.card {
  @apply rounded-md bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 p-5 text-center drop-shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl;
}
.card-image {
  @apply mx-auto h-full w-10/12 rounded-lg;
}
.card-title {
  @apply py-2 font-sans text-xl font-bold uppercase;
}
.card-description {
  @apply text-base font-medium;
}
</style>
