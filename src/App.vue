<template>
  <div> <!-- Root element untuk App.vue -->
    <Preloader v-if="showPreloader" /> 
    <AppHeader />

    <main>
      <router-view v-slot="{ Component }">
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
import { ref, onMounted } from 'vue'; // onMounted jika perlu
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

const showPreloader = ref(true); // Contoh state untuk preloader

onMounted(() => {
  
  const preloaderElement = document.getElementById('preloder');
  if (preloaderElement) {
      // Sembunyikan setelah beberapa saat atau setelah window.load
      // main.js template mungkin sudah melakukan ini.
      window.addEventListener('load', () => { // Atau event lain dari main.js template
        if (preloaderElement) preloaderElement.style.display = 'none';
        showPreloader.value = false;
      });
      // Fallback
      setTimeout(() => {
        if (preloaderElement && preloaderElement.style.display !== 'none') {
            preloaderElement.style.display = 'none';
        }
        showPreloader.value = false;
      }, 2500); // Sesuaikan durasi
  } else {
    showPreloader.value = false; // Jika tidak ada elemen preloader HTML
  }

  // Penting: Script main.js dari template (yang ada di public/js/main.js)
  // akan dieksekusi secara global karena sudah di-link di public/index.html.
  // Script tersebut akan mencari selector CSS (misal, .owl-carousel, .nice-select)
  // dan menginisialisasi plugin jQuery.
  // Pastikan selector-selector tersebut ADA di dalam komponen Vue Anda
  // (AppHeader.vue, AppFooter.vue, OffcanvasMenu.vue, dll.)
});

</script>

<style>
/* Style untuk transisi halaman (opsional) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* CSS global dari template sudah di-link di public/index.html, jadi tidak perlu impor di sini */
/* Hapus atau komentari CSS default Vite jika tidak digunakan */
/* @import './assets/base.css'; */
</style>