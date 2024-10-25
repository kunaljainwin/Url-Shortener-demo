<template>
    <div class="auth">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <nuxt-link to="/login">Login here</nuxt-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const register = () => {
    // Add your registration logic here (e.g., API call)
    console.log(`Registering with: ${email.value} and password: ${password.value}`);
  };
  </script>
  
  <style scoped>
  .auth {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  button {
    padding: 10px 15px;
  }
  </style>
  