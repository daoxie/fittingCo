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
                <template v-if="!isAuthenticated">
                  <router-link to="/login">Sign in</router-link>
                  <router-link to="/register">Register</router-link>
                </template>
                <template v-else>
                  <router-link to="/profile" class="welcome-user">Welcome, {{ user?.name }}!</router-link>
                  <a href="#" @click.prevent="handleLogout" class="logout-link">Logout</a>
                </template>
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
            <router-link to="/"><img src="/img/logo.png" alt="Logo" /></router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <nav class="header__menu mobile-menu">
            <ul>
              <li :class="{ active: $route.path === '/' }"><router-link to="/">Home</router-link></li>
              <li :class="{ active: $route.path === '/shop' }"><router-link to="/shop">Shop</router-link></li>
              <li>
                <a href="#">Pages</a>
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
            <a href="#" class="search-switch"><img src="/img/icon/search.png" alt="Search" /></a>
            <router-link to="/wishlist"><img src="/img/icon/heart.png" alt="Wishlist" /></router-link>
            <router-link to="/cart"><img src="/img/icon/cart.png" alt="Cart" /> <span>0</span></router-link>
            <div class="price">$0.00</div>
          </div>
        </div>
      </div>
      <div class="canvas__open"><i class="fa fa-bars"></i></div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useAuth } from '../composables/useAuth';

const route = useRoute();
const { user, isAuthenticated, logout } = useAuth();

function handleLogout() {
  logout();
}

onMounted(() => {
  // Logika untuk inisialisasi plugin jQuery bisa ditambahkan di sini jika
  // main.js template tidak menghandlenya dengan baik dalam konteks Vue.
});
</script>

<style scoped>
.header__menu ul li a.router-link-active,
.header__menu ul li.active > a,
.header__menu ul li.active > router-link {
  color: #111111 !important;
}

.header__top__links a,
.header__top__links .welcome-user {
    font-size: 13px;
    color: #ffffff;
    display: inline-block;
    margin-right: 15px;
    text-decoration: none;
    cursor: pointer;
}

.header__top__links a:last-child,
.header__top__links .welcome-user + a.logout-link { /* Lebih spesifik untuk logout link */
    margin-right: 0;
}

.header__top__links .logout-link:hover,
.header__top__links .welcome-user:hover,
.header__top__links > router-link:hover {
    color: #e53637;
}
</style>