import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CatalogPage from '@/views/CatalogPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import CorzinaPage from '@/views/CorzinaPage.vue'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/corzina',
    name: 'Corzina',
    component: CorzinaPage
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

