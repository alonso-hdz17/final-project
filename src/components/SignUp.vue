<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import router from '@/router'
const { signup } = useAuth()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await signup(username.value, password.value)) {
    if (router.query.redirect) {
      router.push(router.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  }
}
</script>

<template>
  <body>
    <div class="login">
      <div class="title">Sign Up</div>
      <form class="login-form" @submit.prevent="logUserIn">
        <div class="textbox">
          <input v-model="username" type="text" placeholder="Email" />
        </div>
        <div class="textbox">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
        <button type="submit" class="submit">Register</button>
      </form>
    </div>
  </body>
</template>

<style lang="postcss" scoped>
body {
  @apply items-center object-center py-8;
}
.login {
  @apply mx-auto h-1/5 w-1/4 justify-center rounded-3xl bg-zinc-700 p-16 text-center;
}
.title {
  @apply mx-auto items-center justify-center text-2xl font-semibold text-white;
}
.login-form {
  @apply m-0 grid w-full place-items-center gap-4 py-4;
}
.textbox {
  @apply relative h-14 w-full rounded-lg border-white;
}
.login-form input {
  @apply h-14 w-full rounded-lg bg-transparent text-lg text-white;
}

.login-form submit {
  @apply bg-transparent;
}
.login-form button {
  @apply h-14 w-full cursor-pointer rounded-lg bg-white font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:shadow-zinc-600;
}
</style>
