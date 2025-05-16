<!-- src/components/AppHeader.vue -->
<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7">
            <div class="header__top__left">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-5">
            <div class="header__top__right">
              <div class="header__top__links">
                <router-link to="/signin">Sign in</router-link>
                <router-link to="/faq">FAQs</router-link>
              </div>
              <div class="header__top__hover">
                <span>Usd <i class="arrow_carrot-down"></i></span>
                <ul>
                  <li>USD</li>
                  <li>EUR</li>
                  <li>USD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <div class="header__logo">
            <router-link to="/"><img src="/img/logo.png" alt="Logo"></router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <nav class="header__menu mobile-menu">
            <ul>
              <li :class="{ active: $route.path === '/' }"><router-link to="/">Home</router-link></li>
              <li :class="{ active: $route.path === '/shop' }"><router-link to="/shop">Shop</router-link></li>
              <li>
                <a href="#">Pages</a> <!-- "Pages" hanya trigger dropdown, bukan link Vue -->
                <ul class="dropdown">
                  <li><router-link to="/about">About Us</router-link></li>
                  <li><router-link to="/shop-details">Shop Details</router-link></li>
                  <li><router-link to="/shopping-cart">Shopping Cart</router-link></li>
                  <li><router-link to="/checkout">Check Out</router-link></li>
                  <li><router-link to="/blog-details">Blog Details</router-link></li>
                </ul>
              </li>
              <li :class="{ active: $route.path === '/blog' }"><router-link to="/blog">Blog</router-link></li>
              <li :class="{ active: $route.path === '/contact' }"><router-link to="/contact">Contacts</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="header__nav__option">
            <a href="#" class="search-switch"><img src="/img/icon/search.png" alt="Search"></a> <!-- Ini BUKAN router-link -->
            <router-link to="/wishlist"><img src="/img/icon/heart.png" alt="Wishlist"></router-link>
            <router-link to="/cart"><img src="/img/icon/cart.png" alt="Cart"> <span>0</span></router-link>
            <div class="price">$0.00</div>
          </div>
        </div>
      </div>
      <div class="canvas__open"><i class="fa fa-bars"></i></div> <!-- Ini untuk trigger offcanvas, dihandle JS template -->
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();

onMounted(() => {
  // Biarkan kosong untuk saat ini, asumsikan main.js template menghandle inisialisasi plugin.
  // Jika ada masalah dengan search-switch, canvas__open, atau mobile-menu,
  // kita bisa periksa lebih lanjut apakah main.js template berfungsi atau perlu
  // inisialisasi manual di sini.
});
</script>

<style scoped>
.header__menu ul li.active > a,
.header__menu ul li.active > router-link { /* Tambahkan router-link agar styling active juga kena */
  color: #111111; /* Ganti dengan warna aktif dari template Anda */
}
/* Atau, jika router-link merender <a>, maka styling CSS untuk a sudah cukup.
   Vue Router secara default merender <router-link> sebagai tag <a>.
   Jika Anda ingin memastikan, Anda bisa juga men-style class router-link-active
   yang otomatis ditambahkan Vue Router. */
.header__menu ul li .router-link-active { /* Styling untuk link yang aktif */
    color: #111111 !important; /* Sesuaikan warna dan !important jika perlu override */
}
</style>