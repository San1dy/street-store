import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CatalogPage from '@/views/CatalogPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import AppLogin from '@/views/AppLogin.vue'
import AppRegister from '@/views/AppRegister.vue'
import CorzinaPage from '@/views/CorzinaPage.vue'
import FavoritesPage from '@/views/FavoritesPage.vue'

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
    path: '/signup',
    name: 'Signup',
    component: AppLogin
  },
  {
    path: '/signin',
    name: 'Signin',
    component: AppRegister
  },
  {
    path: '/corzina',
    name: 'Corzina',
    component: CorzinaPage
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

