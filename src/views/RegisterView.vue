<!-- src/views/RegisterView.vue -->
<template>
  <div>
    <!-- Breadcrumb (opsional, sesuaikan) -->
    <section class="breadcrumb-blog set-bg" data-setbg="/img/breadcrumb-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Register</h2>
                </div>
            </div>
        </div>
    </section>

    <section class="register spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="register__form">
              <h3>Create an Account</h3>
              <form @submit.prevent="handleRegister">
                <div class="input__item">
                  <input type="text" v-model="name" placeholder="Full Name" required />
                  <span class="icon_profile"></span>
                </div>
                <div class="input__item">
                  <input type="email" v-model="email" placeholder="Email address" required />
                  <span class="icon_mail"></span>
                </div>
                <div class="input__item">
                  <input type="password" v-model="password" placeholder="Password" required />
                  <span class="icon_lock"></span>
                </div>
                 <div class="input__item">
                  <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />
                  <span class="icon_lock"></span>
                </div>
                <button type="submit" class="site-btn">Register Now</button>
              </form>
              <div class="register__login">
                <p>Already have an account? <router-link to="/login">Login</router-link></p>
              </div>
               <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth'; // Kita akan buat ini

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const router = useRouter();
const { register } = useAuth();


async function handleRegister() {
  errorMessage.value = '';
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.';
    return;
  }

  // SIMULASI REGISTER DENGAN BACKEND
  const success = await register(name.value, email.value, password.value);

  if (success) {
    // Redirect ke halaman login atau langsung login dan redirect ke home
    alert('Registration successful! Please login.');
    router.push('/login');
  } else {
    errorMessage.value = 'Registration failed. Email might be taken.';
  }
}
</script>

<style scoped>
/* Gunakan style yang mirip dengan LoginView, sesuaikan jika perlu */
.register.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}
.register__form {
  background: #f3f2ee;
  padding: 40px;
  border-radius: 5px;
}
.register__form h3 {
  color: #111111;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}
.input__item { /* Style sudah ada di LoginView, pastikan konsisten */
  position: relative;
  margin-bottom: 20px;
}
.input__item input {
  height: 50px;
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 15px;
  color: #b2b2b2;
  padding-left: 20px;
  padding-right: 50px;
}
.input__item input:focus {
    border-color: #111111;
}
.input__item .icon_mail,
.input__item .icon_lock,
.input__item .icon_profile {
  font-size: 18px;
  color: #b2b2b2;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.site-btn {
  width: 100%;
  margin-top: 10px;
}
.register__login {
    text-align: center;
    margin-top: 25px;
}
.register__login p {
    color: #111111;
}
.register__login p a {
    color: #e53637; /* Sesuaikan dengan warna primary template Anda */
    font-weight: 700;
}
.error-message {
    color: red;
    text-align: center;
    margin-top: 15px;
}
/* Styling breadcrumb (jika menggunakan class yang sama) */
.breadcrumb-blog {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover; /* Tambahkan jika belum ada global */
    background-position: center; /* Tambahkan jika belum ada global */
}
.breadcrumb-blog h2 {
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
}
</style>