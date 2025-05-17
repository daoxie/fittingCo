// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../composables/useAuth';

// Impor Views
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

// Impor Komponen Layout
import MainLayout from '../layouts/MainLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresGuest: true, layout: AuthLayout } 
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { requiresGuest: true, layout: AuthLayout } 
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true, layout: MainLayout } 
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true, layout: MainLayout } // GUNAKAN MainLayout
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { requiresAuth: true, layout: MainLayout } // GUNAKAN MainLayout
  },
  // ... rute lain, pastikan menambahkan meta.layout
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
});

// Navigation Guard Anda yang sudah ada
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth();

  if (!to.matched.length) {
    if (!isAuthenticated.value) return next({ name: 'Login', query: { redirect: to.fullPath } });
    return next({ name: 'Home' });
  }

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);

  if (requiresAuth && !isAuthenticated.value) {
    return next({ name: 'Login', query: { redirect: to.fullPath } });
  } else if (requiresGuest && isAuthenticated.value) {
    return next({ name: 'Home' });
  } else {
    return next();
  }
});

export default router;