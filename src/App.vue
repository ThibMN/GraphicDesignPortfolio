<script setup lang="ts">
import { ref, computed } from 'vue'
import HomePage from './components/HomePage.vue'
import GalleryPage from './components/GalleryPage.vue'
import ShopPage from './components/ShopPage.vue'
import AboutPage from './components/AboutPage.vue'

type Page = 'home' | 'gallery' | 'shop' | 'about'

const currentPage = ref<Page>('home')

const navigateTo = (page: Page) => {
  currentPage.value = page
}

const goBack = () => {
  currentPage.value = 'home'
}

// Couleurs de fond pour chaque page
const pageColors = {
  home: '#000000',
  gallery: '#FF0000',
  shop: '#0900FF',
  about: '#BF00FF'
}

const backgroundColor = computed(() => pageColors[currentPage.value])
</script>

<template>
  <div class="portfolio-app" :style="{ backgroundColor }">
    <HomePage 
      v-if="currentPage === 'home'" 
      @navigate="navigateTo" 
    />
    <GalleryPage 
      v-if="currentPage === 'gallery'" 
      @back="goBack" 
    />
    <ShopPage 
      v-if="currentPage === 'shop'" 
      @back="goBack" 
    />
    <AboutPage 
      v-if="currentPage === 'about'" 
      @back="goBack" 
    />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.portfolio-app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: background-color 0.8s ease-in-out;
}
</style>
