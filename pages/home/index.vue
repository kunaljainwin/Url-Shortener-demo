<template>
    <div class="url-shortener">
      <h1>URL Shortener</h1>
      <form @submit.prevent="shortenUrl">
        <input
          v-model="originalUrl"
          type="url"
          placeholder="Enter URL to shorten"
          required
        />
        <button type="submit">Shorten</button>
      </form>
  
      <div v-if="shortenedUrl" class="result">
        <p>Shortened URL: <a :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const originalUrl = ref('');
  const shortenedUrl = ref('');
  
  const shortenUrl = () => {
    // This is a placeholder for your URL shortening logic.
    // In a real application, you would typically make an API call here.
    
    // For demonstration, we're just appending a random string.
    const randomString = Math.random().toString(36).substring(2, 8);
    shortenedUrl.value = `http://short.ly/${randomString}`;
  };
  </script>
  
  <style scoped>
  .url-shortener {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .result {
    margin-top: 20px;
  }
  </style>
  