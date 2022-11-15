<template>
  <div class="wrapper">
    <h1>Hernandez Detailing Services<br /></h1>
  </div>
  <div class="message">
    At Hernandez Car Care we take pride in our work and always looks to provide the best service for their customers.<br />
    We offer all kinds of services like a simple wash-vac, interior & exterior detail, paint correction, ceramic coating
    and more.
  </div>
  <div class="title"><h3>Premium Package</h3></div>
  <img class="ceramic" img src="ceramic.jpg" />
  <div class="description">
    The premium package is our top of the line detailing package that will leave your vehicle looking like new!
  </div>
  <div class="message"></div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply flex items-center justify-center text-6xl font-bold text-slate-300;
}
.symbol {
  @apply flex items-center justify-center py-5;
}
.message {
  @apply flex items-center justify-center py-7 text-lg  font-semibold text-slate-400;
}
.title {
  @apply flex  items-center  justify-center py-6 text-3xl font-semibold text-slate-300;
}
.ceramic {
  @apply mx-auto h-64;
}
.description {
  @apply flex items-center justify-center py-3 font-semibold text-slate-300;
}
</style>
