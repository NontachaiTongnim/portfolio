<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div v-motion-pop-visible class="mx-auto max-w-2xl lg:text-center">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          About
        </p>
        <p class="mt-4 w-auto text-lg leading-8 text-gray-600">
          "Hi, I'm Nontachai. I love programming and dream of becoming a
          programmer. Although I don't have professional experience, during my
          internship, I worked as a programmer. Can you check my CV"
        </p>
      </div>
      <div v-motion-pop-visible class="mx-auto max-w-2xl lg:text-center mt-16">
        <p
          @click="showModal"
          class="inline-block bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 cursor-pointer"
        >
          CV
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16"
        >
          <div 
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div v-motion-pop-visible
                class="absolute left-2 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600"
              >
                <component
                  :is="feature.icon"
                  class="h-7 w-7 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="container mx-auto p-8">
      <section class="flex flex-wrap justify-center">
        <!-- Left Card -->
        <div
          v-motion-roll-visible-left
          class="max-w-sm rounded overflow-hidden shadow-lg m-4"
        >
          <img class="w-full" src="../assets/rmutk.jpg" alt="Card image" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Bachelor of Science in Computer Science
            </div>
            <p class="text-gray-700 text-base">
              RAJAMANGALA UNIVERSITY OF TECHNOLOGY KRUNGTHEP <br />Year of
              Graduation: 2024<br />
              GPA: 3.05
            </p>
          </div>
        </div>

        <!-- Right Card -->
        <div
          v-motion-roll-visible-right
          class="max-w-sm rounded overflow-hidden shadow-lg m-4 flex justify-center items-center"
        >
          <img class="w-40 h-40" src="../assets/pk.jpg" alt="Card image" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">High School in Art-Maths</div>
            <p class="text-gray-700 text-base">
              Prakanongpittayalai School<br />Year of Graduation: 2020
              <br />GPA: 3.28
            </p>
          </div>
        </div>
      </section>
    </div>

    <Modal v-show="isModalVisible" @close="closeModal"> </Modal>
  </div>
</template>
<script setup>
import Modal from "./Modal.vue";

import {
  SparklesIcon,
  UserCircleIcon,
  GlobeAsiaAustraliaIcon,
  CakeIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Nickname",
    description: "Ohm",
    icon: UserCircleIcon,
  },
  {
    name: "BirthDate",
    description: "24 July 2002",
    icon: CakeIcon,
  },
  {
    name: "Age",
    description: "22 years",
    icon: SparklesIcon,
  },
  {
    name: "Nationality",
    description: "Thai",
    icon: GlobeAsiaAustraliaIcon,
  },
];
</script>
<script>
import Modal from "./Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
