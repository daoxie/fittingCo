// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
 import AboutView from '../views/AboutView.vue';
// Impor view lain yang akan Anda buat (ShopView, ContactView, dll.)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, // Buat file ini di src/views/HomeView.vue
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  // Tambahkan rute lain:
  // { path: '/shop', name: 'Shop', component: () => import('../views/ShopView.vue') },
  // { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Gunakan BASE_URL dari Vite
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Selalu scroll ke atas saat navigasi
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

export default router;