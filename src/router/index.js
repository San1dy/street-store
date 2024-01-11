import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/views/HomePage.vue');
const CatalogPage = () => import('@/views/CatalogPage.vue');
const ContactPage = () => import('@/views/ContactPage.vue');
const CorzinaPage = () => import('@/views/CorzinaPage.vue');
const GenderComponent = () => import('@/components/CatalogComponents/GenderComponent.vue');
const CatalogComponent = () => import('@/components/CatalogComponents/CatalogContainer.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/catalog',
    component: CatalogPage,
    children: [
      {
        path: '', 
        component: GenderComponent
      },
      {
        path: 'gender-select',
        component: GenderComponent
      },
      {
        path: ':floor',
        name: 'CatalogFloor',
        component: CatalogComponent,
        props: true
      }
    ]
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

