<script setup lang="ts">
defineEmits<{
  back: []
}>()
</script>

<template>
  <div class="about-page">
    <div class="page-container">
      <div class="content-frame">
        <div class="header">
          <h1 class="page-title">About & Contact</h1>
          <div class="header-controls">
            <div class="control-background">
              <button class="back-button" @click="$emit('back')">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9324 29.7917L30.7657 42.6251L27.5001 45.8334L9.16675 27.5001L27.5001 9.16675L30.7657 12.3751L17.9324 25.2084H45.8334V29.7917H17.9324Z" fill="black"/>
                </svg>
              </button>
              <button class="close-button" @click="$emit('back')">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6666 43.5416L11.4583 40.3333L24.2916 27.4999L11.4583 14.6666L14.6666 11.4583L27.4999 24.2916L40.3333 11.4583L43.5416 14.6666L30.7083 27.4999L43.5416 40.3333L40.3333 43.5416L27.4999 30.7083L14.6666 43.5416Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div class="content-area">
          <div class="content-scroll">
            <section class="about-section">
              <h2 class="section-title">About</h2>
              <div class="text-content">
                <p>Hi, I'm Thibaud, an independent graphic designer passionate about creating visuals that are both impactful and timeless.</p>
                
                <p>I specialize in branding, visual identity, and digital design, helping individuals and businesses bring their ideas to life through strong and meaningful imagery.</p>
                
                <p>My approach combines creativity, clarity, and adaptability – every project is a chance to tell a unique story through visuals. Whether it's a logo, a poster, a web layout, or a complete brand identity, I focus on delivering designs that feel authentic and memorable.</p>
                
                <p>If you're looking for a designer who listens, understands, and transforms ideas into visuals that resonate, you're in the right place.</p>
              </div>
            </section>

            <section class="contact-section">
              <h2 class="section-title">Contact</h2>
              <div class="text-content">
                <p>I'm always open to new collaborations, freelance projects, or just a quick chat about design.</p>
                <p>You can reach me here:</p>
                
                <div class="contact-info">
                  <a href="mailto:thibaudmineau@gmail.com" class="email-link">
                    <span class="email-icon">📧</span>
                    <span class="email-text">thibaudmineau@gmail.com</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
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

.content-area {
  position: absolute;
  top: 87px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  overflow: hidden;
}

.content-scroll {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

.about-section,
.contact-section {
  margin-bottom: 40px;
}

.section-title {
  color: #FFF;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 20px 0;
  border-bottom: 2px solid #BF00FF;
  padding-bottom: 10px;
  display: inline-block;
}

.text-content {
  color: #FFF;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;
}

.text-content p {
  margin: 0 0 16px 0;
  opacity: 0.9;
}

.contact-info {
  margin-top: 24px;
  padding: 20px;
  background: rgba(191, 0, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(191, 0, 255, 0.3);
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #FFF;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
}

.email-link:hover {
  background: rgba(191, 0, 255, 0.2);
  transform: translateX(5px);
}

.email-icon {
  font-size: 24px;
}

.email-text {
  color: #BF00FF;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.email-link:hover .email-text {
  border-bottom-color: #BF00FF;
}

/* Scrollbar personnalisée */
.content-scroll::-webkit-scrollbar {
  width: 8px;
}

.content-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: rgba(191, 0, 255, 0.5);
  border-radius: 4px;
}

.content-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(191, 0, 255, 0.7);
}

@media (max-width: 1024px) {
  .about-page {
    padding: 15px;
  }

  .page-title {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .about-page {
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

  .content-area {
    top: 70px;
  }

  .content-scroll {
    padding: 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .text-content {
    font-size: 15px;
  }

  .email-link {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .content-scroll {
    padding: 12px;
  }

  .section-title {
    font-size: 24px;
  }

  .text-content {
    font-size: 14px;
  }

  .email-link {
    font-size: 15px;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }

  .contact-info {
    padding: 15px;
  }
}
</style>
