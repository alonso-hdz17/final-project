import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import Services from '@/components/ServicesPage.vue'
import Contact from '@/components/ContactPage.vue'
import Login from '@/components/LoginPage.vue'
import SignUp from '@/components/SignUp.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/', name: 'Services', component: Services },
  { path: '/', name: 'Contact', component: Contact },
  { path: '/', name: 'Login', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
