<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadGalleryImagesWithDescriptions } from '../utils/galleryLoader'
import ImageDetailModal from './ImageDetailModal.vue'
import type { GalleryImageWithDescription } from '../utils/galleryLoader'

defineEmits<{
  back: []
}>()

const images = ref<GalleryImageWithDescription[]>([])
const selectedImage = ref<GalleryImageWithDescription | null>(null)

onMounted(() => {
  images.value = loadGalleryImagesWithDescriptions()
  console.log('Images chargées:', images.value)
})

const openImageDetail = (image: GalleryImageWithDescription) => {
  selectedImage.value = image
}

const closeImageDetail = () => {
  selectedImage.value = null
}

// Fonction pour attribuer des classes de grille variées aux images
const getGridClass = (index: number) => {
  const classes = [
    'small-left',
    'large-center', 
    'small-right',
    'small-bottom-left',
    'medium-bottom',
    'large-bottom-right'
  ]
  return classes[index % classes.length]
}
</script>

<template>
  <div class="gallery-page">
    <div class="page-container">
      <div class="content-frame">
        <div class="header">
          <h1 class="page-title">Gallery</h1>
          <div class="header-controls">
            <div class="control-background">
              <button class="back-button" @click="$emit('back')">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9324 29.7917L30.7657 42.625L27.5001 45.8333L9.16675 27.5L27.5001 9.16666L30.7657 12.375L17.9324 25.2083H45.8334V29.7917H17.9324Z" fill="black"/>
                </svg>
              </button>
              <button class="close-button" @click="$emit('back')">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6666 43.5417L11.4583 40.3333L24.2916 27.5L11.4583 14.6667L14.6666 11.4583L27.4999 24.2917L40.3333 11.4583L43.5416 14.6667L30.7083 27.5L43.5416 40.3333L40.3333 43.5417L27.4999 30.7083L14.6666 43.5417Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div class="gallery-grid" v-if="images.length > 0">
          <div 
            v-for="(image, index) in images" 
            :key="image.fileName"
            class="gallery-item"
            :class="getGridClass(index)"
            @click="openImageDetail(image)"
          >
            <img 
              :src="image.url" 
              :alt="image.title"
              class="gallery-image"
              loading="lazy"
            />
            <div class="image-overlay">
              <span class="image-title">{{ image.title }}</span>
              <span v-if="image.hasMarkdown" class="has-description">📖</span>
              <span class="click-hint">Cliquez pour voir les détails</span>
            </div>
          </div>
        </div>
        
        <div v-else class="empty-gallery">
          <p>Aucune image trouvée dans le dossier gallery.</p>
          <p>Ajoutez des images dans <code>src/assets/gallery/</code> pour les voir apparaître automatiquement ici.</p>
        </div>
      </div>
    </div>
    
    <!-- Modal de détail de l'image -->
    <ImageDetailModal 
      :image="selectedImage" 
      @close="closeImageDetail" 
    />
  </div>
</template>

<style scoped>
.gallery-page {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
}

.page-container {
  width: 100%;
  height: 100%;
  max-width: 1400px;
  max-height: 984px;
  flex-shrink: 0;
  background: #D9D9D9;
  box-shadow: 0 4px 200px 30px rgba(255, 255, 255, 0.40);
  position: relative;
  margin: 0 auto;
}

.content-frame {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  flex-shrink: 0;
  background: #000;
  position: absolute;
  left: 5px;
  top: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
}

.page-title {
  color: #FFF;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  position: absolute;
  left: 8px;
  top: 0;
  margin: 0;
}

.header-controls {
  position: absolute;
  right: -5px;
  top: -5px;
}

.control-background {
  width: 101px;
  height: 55px;
  background: #D9D9D9;
  position: relative;
}

.back-button, .close-button {
  width: 55px;
  height: 55px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
}

.back-button {
  left: 0;
}

.close-button {
  right: 0;
}

.gallery-grid {
  position: absolute;
  top: 87px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1234px;
  height: calc(100% - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.gallery-item {
  background: #D9D9D9;
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.gallery-item:active {
  transform: translateY(-2px);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  padding: 20px 15px 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gallery-item:hover .image-overlay {
  transform: translateY(0);
}

.image-title {
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 8px;
}

.has-description {
  font-size: 14px;
  opacity: 0.8;
}

.click-hint {
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  opacity: 0.7;
  font-style: italic;
}

.empty-gallery {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
}

.empty-gallery p {
  margin-bottom: 10px;
  font-size: 18px;
}

.empty-gallery code {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

.small-left {
  grid-column: 1;
  grid-row: 1;
}

.large-center {
  grid-column: 2 / 4;
  grid-row: 1;
}

.small-right {
  grid-column: 4;
  grid-row: 1;
}

.small-bottom-left {
  grid-column: 1;
  grid-row: 2;
}

.medium-bottom {
  grid-column: 2;
  grid-row: 2;
}

.large-bottom-right {
  grid-column: 3 / 5;
  grid-row: 2;
}

@media (max-width: 1024px) {
  .gallery-page {
    padding: 15px;
  }

  .page-title {
    font-size: 32px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 15px;
  }

  .large-center,
  .large-bottom-right {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .gallery-page {
    padding: 10px;
  }

  .page-title {
    font-size: 28px;
  }

  .control-background {
    width: 90px;
    height: 50px;
  }

  .back-button, .close-button {
    width: 40px;
    height: 40px;
    top: 5px;
  }

  .back-button {
    left: 5px;
  }

  .close-button {
    right: 5px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 200px);
    gap: 10px;
    top: 70px;
  }

  .gallery-item {
    grid-column: 1 !important;
    grid-row: auto !important;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .gallery-grid {
    grid-template-rows: repeat(6, 150px);
    padding: 10px;
  }
}
</style>
