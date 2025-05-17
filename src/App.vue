<!-- src/App.vue -->
<template>
  <component :is="layoutComponent" />
  
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from './composables/useAuth';

import MainLayout from './layouts/MainLayout.vue';


const route = useRoute();
const { checkAuthStatus } = useAuth();
const showGlobalPreloader = ref(true);

onMounted(() => {
  checkAuthStatus();

  const preloaderHtmlElement = document.getElementById('preloder');
  if (preloaderHtmlElement) {
    window.addEventListener('load', () => {
      if (preloaderHtmlElement) {
        preloaderHtmlElement.style.display = 'none';
      }
      showGlobalPreloader.value = false;
    });
    setTimeout(() => {
      if (preloaderHtmlElement && preloaderHtmlElement.style.display !== 'none') {
        preloaderHtmlElement.style.display = 'none';
      }
      showGlobalPreloader.value = false;
    }, 3000);
  } else {
    setTimeout(() => {
        showGlobalPreloader.value = false;
    }, 1000);
  }
});

const layoutComponent = computed(() => {
  if (route.meta.layout) {
    return route.meta.layout;
  }
  return MainLayout;
});
</script>

<style>
/* Global Styles */
/* Misalnya:
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111111;
}

a {
  text-decoration: none;
  color: inherit;
}
*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>