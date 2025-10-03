<script setup lang="ts">
defineEmits<{
  navigate: [page: 'gallery' | 'shop' | 'about']
}>()
</script>

<template>
  <div class="home-page">
    <div class="portfolio-card">
      <div class="card-frame">
        <div class="inner-frame">
          <img 
            class="portfolio-image" 
            src="https://api.builder.io/api/v1/image/assets/TEMP/72bae8872d79cd9738034773367ff3ec5910427c?width=560" 
            alt="Portfolio artwork" 
          />
          <div class="separator-line"></div>
          <nav class="navigation-menu">
            <button 
              class="nav-item" 
              @click="$emit('navigate', 'shop')"
            >
              Shop
            </button>
            <button 
              class="nav-item" 
              @click="$emit('navigate', 'gallery')"
            >
              Gallery
            </button>
            <button 
              class="nav-item" 
              @click="$emit('navigate', 'about')"
            >
              Contact
            </button>
            <button 
              class="nav-item" 
              @click="$emit('navigate', 'about')"
            >
              About
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
}

.portfolio-card {
  width: 300px;
  height: 600px;
  max-width: 90vw;
  max-height: 80vh;
  flex-shrink: 0;
  background: #D9D9D9;
  box-shadow: 0 4px 200px 30px rgba(255, 255, 255, 0.20);
  position: relative;
}

.card-frame {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  flex-shrink: 0;
  background: #000;
  position: absolute;
  left: 5px;
  top: 5px;
}

.inner-frame {
  width: 100%;
  height: 100%;
  position: relative;
}

.portfolio-image {
  width: calc(100% - 10px);
  height: calc(58.3% - 10px);
  flex-shrink: 0;
  aspect-ratio: 4/5;
  position: absolute;
  left: 5px;
  top: 6px;
  object-fit: cover;
}

.separator-line {
  width: 100%;
  height: 5px;
  flex-shrink: 0;
  background: #D9D9D9;
  position: absolute;
  left: 0;
  top: calc(58.3% + 5px);
}

.navigation-menu {
  position: absolute;
  left: 5px;
  top: calc(58.3% + 15px);
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.nav-item {
  color: #FFF;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  transition: opacity 0.2s;
}

.nav-item:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .home-page {
    padding: 10px;
  }

  .portfolio-card {
    width: 250px;
    height: 500px;
    max-width: 85vw;
    max-height: 75vh;
  }

  .nav-item {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .portfolio-card {
    width: 220px;
    height: 440px;
    max-width: 80vw;
    max-height: 70vh;
  }

  .nav-item {
    font-size: 18px;
  }
}

@media (max-width: 360px) {
  .portfolio-card {
    width: 200px;
    height: 400px;
  }

  .nav-item {
    font-size: 16px;
  }
}
</style>
