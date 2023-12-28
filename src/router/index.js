import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/views/HomePage.vue');
const CatalogPage = () => import('@/views/CatalogPage.vue');
const ContactPage = () => import('@/views/ContactPage.vue');
const CorzinaPage = () => import('@/views/CorzinaPage.vue');

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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

