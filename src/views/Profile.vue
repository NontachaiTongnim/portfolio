<template>
    <div v-motion-slide-visible-bottom  class="flex flex-col items-center mt-10" v-if="showContent">
      <br><br><br><br><br><br><br>
      <img src="../assets/63502100008-1.jpg" class="rounded-full h-40 w-40 object-cover border-4 border-white shadow-lg" alt="Profile Picture">
      <h1 class="text-3xl mt-6 font-bold text-black-400">Nontachai Tongnim</h1>
      <p class="text-lg text-black-300 mt-2 ">Programmer/Fullstack-Developer</p>
   
      <br> <br> <br> <br> <br> 
    </div>
  </template>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const showContent = ref(false);
  
  onMounted(() => {
    setTimeout(() => {
      showContent.value = true;
    }, 100);
  });
  </script>
  