<!-- src/layouts/MainLayout.vue -->
<template>
  <div>
    <OffcanvasMenu />
    <AppHeader />
    <main>
      <router-view v-slot="{ Component }"> <!-- Router view untuk konten halaman -->
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <SearchModal />
  </div>
</template>

<script setup>
// Impor komponen yang digunakan oleh layout ini
import { RouterView } from 'vue-router';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

// TIDAK ADA LAGI useAuth atau onMounted untuk checkAuthStatus atau preloader di sini.
// Itu akan dihandle oleh App.vue (root) atau tidak sama sekali jika preloader
// dikontrol oleh JS template.
</script>

<style>
/* Pindahkan style transisi fade ke sini jika hanya berlaku untuk konten di dalam MainLayout */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Style global lain yang spesifik untuk MainLayout bisa ditaruh di sini atau di App.vue */
</style>