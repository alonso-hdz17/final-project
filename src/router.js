import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import Services from '@/components/ServicesPage.vue'
import Contact from '@/components/ContactPage.vue'
import Login from '@/components/LoginPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/', name: 'Services', component: Services },
  { path: '/', name: 'Contact', component: Contact },
  { path: '/', name: 'Login', component: Login },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
