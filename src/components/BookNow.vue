<script setup></script>

<template>
  <div class="wrapper">
    <h1>GET THAT NEW CAR SHINE</h1>
  </div>
  <div class="message">
    <p>If you would like to book an appointment with us, fill out the form below.</p>
  </div>
  <body>
    <div class="appointment">
      <div class="title">Book Now</div>
      <form class="appointment-form" @submit.prevent="logUserIn">
        <div class="textbox">
          <input v-model="username" type="text" placeholder="Address" />
        </div>
        <div class="textbox">
          <input v-model="password" type="text" placeholder="Phone Number" />
        </div>
        <div class="dropdown">
          <label for="cars">Select Vehicle type: </label>
          <div class="dropdown-content">
            <select id="cars" name="cars">
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="van">Van</option>
              <option value="truck">Truck</option>
            </select>
          </div>
        </div>
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
  </body>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply text-center text-3xl font-bold text-white;
}
.message {
  @apply py-4 text-center text-base font-medium italic text-white;
}
body {
  @apply items-center object-center py-6;
}
.appointment {
  @apply mx-auto h-1/5 w-1/3 justify-center rounded-3xl bg-zinc-700 p-12 text-center;
}
.title {
  @apply mx-auto items-center justify-center py-2 text-2xl font-semibold text-white;
}
.appointment-form {
  @apply m-0 grid w-full place-items-center gap-2;
}
.textbox {
  @apply relative h-14 rounded-lg border-white;
}
.dropdown {
  @apply text-white;
}
.dropdown-content {
  @apply text-black;
}
.submit {
  @apply h-14 w-full cursor-pointer rounded-lg bg-green-500 font-medium hover:bg-white hover:text-black hover:shadow-md hover:shadow-zinc-600;
}
</style>
