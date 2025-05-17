<!-- src/layouts/AuthLayout.vue -->
<template>
  <div class="auth-page-wrapper">
    <div class="welcome-message">
      <h1>Selamat Datang di FittingCo</h1>
    </div>
    <router-view /> 
  </div>
</template>

<script setup>
</script>

<style scoped>
.auth-page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  min-height: 100vh;
  width: 100%;
  padding: 20px;       
  box-sizing: border-box;
  /* background-color: #f9f9f9; */
}

.welcome-message {
  text-align: center;
  margin-bottom: 40px;
}

.welcome-message h1 {
  font-size: 2.5em;
  color: #111111;
  font-weight: 700;
}
</style>