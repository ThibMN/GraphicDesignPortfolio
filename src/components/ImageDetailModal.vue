<script setup lang="ts">
import { computed } from 'vue'
import type { GalleryImageWithDescription } from '../utils/galleryLoader'

interface Props {
  image: GalleryImageWithDescription | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

// Fonction pour rendre le Markdown en HTML simple
const renderMarkdown = (markdown: string): string => {
  if (!markdown) return ''
  
  return markdown
    // Titres
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Gras
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italique
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Citations
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Listes
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Sauts de ligne
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|b])(.+)$/gm, '<p>$1</p>')
    // Nettoie les paragraphes vides
    .replace(/<p><\/p>/g, '')
}

const renderedDescription = computed(() => {
  return props.image ? renderMarkdown(props.image.description) : ''
})
</script>

<template>
  <div v-if="image" class="image-detail-overlay" @click.self="$emit('close')">
    <div class="image-detail-modal">
      <div class="modal-header">
        <h1 class="image-title">{{ image.title }}</h1>
        <button class="close-button" @click="$emit('close')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <div class="modal-content">
        <div class="image-container">
          <img 
            :src="image.url" 
            :alt="image.title"
            class="detail-image"
          />
        </div>
        
        <div class="description-container">
          <div 
            v-if="image.hasMarkdown && image.description"
            class="markdown-content"
            v-html="renderedDescription"
          ></div>
          <div v-else class="no-description">
            <p>Aucune description disponible pour cette œuvre.</p>
            <p class="help-text">
              Créez un fichier <code>{{ image.name }}.md</code> dans le dossier gallery pour ajouter une description.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.image-detail-modal {
  background: #1a1a1a;
  border-radius: 16px;
  max-width: 1200px;
  max-height: 90vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid #333;
}

.image-title {
  color: #fff;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  height: calc(90vh - 80px);
  max-height: 600px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #000;
}

.detail-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.description-container {
  background: #1a1a1a;
  padding: 30px;
  overflow-y: auto;
}

.markdown-content {
  color: #e0e0e0;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  line-height: 1.6;
}

.markdown-content :deep(h1) {
  color: #fff;
  font-size: 24px;
  margin: 0 0 16px 0;
  font-weight: 600;
}

.markdown-content :deep(h2) {
  color: #fff;
  font-size: 20px;
  margin: 24px 0 12px 0;
  font-weight: 500;
}

.markdown-content :deep(h3) {
  color: #fff;
  font-size: 18px;
  margin: 20px 0 8px 0;
  font-weight: 500;
}

.markdown-content :deep(p) {
  margin: 0 0 12px 0;
  font-size: 14px;
}

.markdown-content :deep(strong) {
  color: #fff;
  font-weight: 600;
}

.markdown-content :deep(em) {
  color: #ccc;
  font-style: italic;
}

.markdown-content :deep(blockquote) {
  border-left: 4px solid #F00;
  padding-left: 16px;
  margin: 16px 0;
  font-style: italic;
  color: #ccc;
}

.markdown-content :deep(ul) {
  margin: 12px 0;
  padding-left: 20px;
}

.markdown-content :deep(li) {
  margin-bottom: 4px;
  font-size: 14px;
}

.no-description {
  text-align: center;
  color: #888;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
}

.no-description p {
  margin: 0 0 12px 0;
}

.help-text {
  font-size: 12px;
  opacity: 0.7;
}

.help-text code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

/* Scrollbar personnalisée */
.description-container::-webkit-scrollbar {
  width: 8px;
}

.description-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.description-container::-webkit-scrollbar-thumb {
  background: rgba(255, 0, 0, 0.5);
  border-radius: 4px;
}

.description-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 0, 0, 0.7);
}

@media (max-width: 768px) {
  .image-detail-modal {
    margin: 10px;
    max-height: 95vh;
  }

  .modal-header {
    padding: 15px 20px;
  }

  .image-title {
    font-size: 22px;
  }

  .modal-content {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
    height: auto;
    max-height: calc(95vh - 60px);
  }

  .image-container {
    padding: 20px;
  }

  .description-container {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .image-detail-overlay {
    padding: 10px;
  }

  .modal-header {
    padding: 12px 15px;
  }

  .image-title {
    font-size: 18px;
  }

  .modal-content {
    grid-template-rows: 250px 1fr;
  }

  .image-container,
  .description-container {
    padding: 15px;
  }
}
</style>