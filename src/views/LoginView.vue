<!-- src/views/LoginView.vue -->
<template>
  <div class="login-view-wrapper">
    <section class="login spad">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="login__form">
              <h3>Login to Your Account</h3>
              <form @submit.prevent="handleLogin">
                <div class="input__item">
                  <input type="email" v-model="email" placeholder="Email address" required />
                  <span class="icon_mail"></span>
                </div>
                <div class="input__item">
                  <input type="password" v-model="password" placeholder="Password" required />
                  <span class="icon_lock"></span>
                </div>
                <button type="submit" class="site-btn">Login Now</button>
              </form>
              <div class="login__register">
                <p>Don't have an account? <router-link to="/register">Register Now</router-link></p>
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
import { useAuth } from '../composables/useAuth';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const { login } = useAuth();

async function handleLogin() {
  errorMessage.value = '';
  const success = await login(email.value, password.value);

  if (success) {
    if (router.currentRoute.value.query.redirect) {
      router.push(router.currentRoute.value.query.redirect);
    } else {
      router.push('/');
    }
  } else {
    errorMessage.value = 'Invalid email or password.';
  }
}
</script>

<style scoped>
.login-view-wrapper {
  width: 100%;
}

.login.spad {
  padding-bottom: 100px;
  padding-top: 50px; /* Sesuaikan jika perlu */
}

.login__form {
  background: #f3f2ee;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.login__form h3 {
  color: #111111;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}

.input__item {
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

.input__item input::placeholder {
    color: #b2b2b2;
}

.input__item input:focus {
    border-color: #111111;
    color: #111111;
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

.input__item input:focus + .icon_mail,
.input__item input:focus + .icon_lock,
.input__item input:focus + .icon_profile {
    color: #111111;
}

.site-btn {
  width: 100%;
  margin-top: 10px;
}

.login__register {
    text-align: center;
    margin-top: 25px;
}

.login__register p {
    color: #111111;
    font-size: 15px;
}

.login__register p a {
    color: #e53637;
    font-weight: 700;
}

.error-message {
    color: red;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
}
</style>