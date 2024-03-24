<script setup>

import Profile from "./views/Profile.vue";
import Cv from "./views/Cv.vue";
import About from "./views/About.vue";
import Skill from "./views/Skill.vue";
import Contact from './views/Contact.vue'

// Import jQuery
import $ from 'jquery';
import { ref, onMounted, onUnmounted } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

// State to track whether navbar is fixed or not
const isNavbarFixed = ref(false);

// Function to check scroll position and toggle fixed navbar
const handleScroll = () => {
  isNavbarFixed.value = window.scrollY > 0;
}

// Add event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove event listener when component is unmounted to prevent memory leaks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
// Smooth scrolling function
const smoothScroll = (target) => {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 7); // Adjust scroll speed here
}
const scrollToSection = (target) => {
  smoothScroll(target);
}
</script>

<template>
  <div>
    <Disclosure as="nav" :class="{ 'fixed top-0 w-full z-10': isNavbarFixed }" class="bg-white transition-all" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-center">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-auto">
            <div class="flex flex-shrink-0 items-center">
                <h3 class="text-3xl font-bold text-black">Portfolio</h3>
            </div>
            <div class="hidden sm:flex sm:ml-auto sm:space-x-4 ">
              <p @click="scrollToSection('#profile')" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-green-500 hover:text-white">Profile</p> 
              <p @click="scrollToSection('#skill')" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-green-500 hover:text-white">Skill & Tools</p>
              <p @click="scrollToSection('#about')" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-green-500 hover:text-white">About</p>
              <p @click="scrollToSection('#contact')" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-green-500 hover:text-white">Contact</p>
            </div>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <p @click="scrollToSection('#profile')" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-500 hover:text-white">Profile</p>
          <p @click="scrollToSection('#skill')" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-500 hover:text-white">Skill & Tools</p>
          <p @click="scrollToSection('#about')" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-500 hover:text-white">About</p>
          <p @click="scrollToSection('#contact')" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-500 hover:text-white">Contact</p>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <Profile id="profile" />
    <Skill id="skill" />
    <About id="about" />
    <Contact id="contact" />
  </div>
</template>




<script>


// jQuery click event listeners for navigation links
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = this.hash;
    scrollToSection(target);
  });
});
</script>


<style scoped>
.fixed {
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>