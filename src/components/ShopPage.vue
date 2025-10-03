<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { loadShopItems, type ShopItem } from '../utils/shopLoader'

defineEmits<{
  back: []
}>()

const items = ref<ShopItem[]>([])
const selectedCategory = ref<string>('all')

onMounted(() => {
  items.value = loadShopItems()
  console.log('Produits chargés:', items.value)
})

// Récupère toutes les catégories uniques
const categories = computed(() => {
  const uniqueCategories = [...new Set(items.value.map(item => item.category || 'Général'))]
  return ['all', ...uniqueCategories]
})

// Filtre les produits par catégorie
const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return items.value
  }
  return items.value.filter(item => item.category === selectedCategory.value)
})

// Format le prix en euros
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

// Fonction pour ajouter au panier (peut être étendue plus tard)
const addToCart = (item: ShopItem) => {
  // Pour l'instant, on affiche juste une alerte
  // Plus tard, on peut intégrer un vrai système de panier
  alert(`"${item.name}" ajouté au panier !`)
  console.log('Produit ajouté au panier:', item)
}
</script>

<template>
  <div class="shop-page">
    <div class="page-container">
      <div class="content-frame">
        <div class="header">
          <h1 class="page-title">Shop</h1>
          <div class="header-controls">
            <div class="control-background">
              <button class="back-button" @click="$emit('back')">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9324 29.7916L30.7657 42.625L27.5001 45.8333L9.16675 27.5L27.5001 9.16663L30.7657 12.375L17.9324 25.2083H45.8334V29.7916H17.9324Z" fill="black"/>
                </svg>
              </button>
              <button class="close-button" @click="$emit('back')">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6666 43.5417L11.4583 40.3334L24.2916 27.5L11.4583 14.6667L14.6666 11.4584L27.4999 24.2917L40.3333 11.4584L43.5416 14.6667L30.7083 27.5L43.5416 40.3334L40.3333 43.5417L27.4999 30.7084L14.6666 43.5417Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Filtres de catégorie -->
        <div class="category-filters" v-if="categories.length > 2">
          <button 
            v-for="category in categories"
            :key="category"
            :class="['filter-btn', { active: selectedCategory === category }]"
            @click="selectedCategory = category"
          >
            {{ category === 'all' ? 'Tous' : category }}
          </button>
        </div>
        
        <div class="shop-grid" v-if="filteredItems.length > 0">
          <div 
            v-for="item in filteredItems"
            :key="item.id"
            class="shop-item"
          >
            <div class="item-image">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="product-image"
                loading="lazy"
              />
              <div class="stock-badge" :class="{ 'out-of-stock': !item.inStock }">
                {{ item.inStock ? 'En stock' : 'Rupture' }}
              </div>
            </div>
            
            <div class="item-info">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-description">{{ item.description }}</p>
              <div class="item-tags" v-if="item.tags && item.tags.length > 0">
                <span 
                  v-for="tag in item.tags.slice(0, 3)" 
                  :key="tag"
                  class="tag"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
            
            <div class="item-footer">
              <div class="item-price">{{ formatPrice(item.price) }}</div>
              <button 
                class="add-to-cart-btn" 
                :disabled="!item.inStock"
                @click="addToCart(item)"
              >
                {{ item.inStock ? 'Ajouter au panier' : 'Indisponible' }}
              </button>
            </div>
          </div>
        </div>
        
        <div v-else class="empty-shop">
          <p>Aucun produit trouvé dans le shop.</p>
          <p>Ajoutez des fichiers JSON dans <code>src/assets/shop/</code> pour voir vos produits ici.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop-page {
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

.category-filters {
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 10;
}

.filter-btn {
  padding: 8px 16px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid #D9D9D9;
  color: #FFF;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: #D9D9D9;
  color: #000;
}

.shop-grid {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  height: calc(100% - 140px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
}

.shop-item {
  background: #D9D9D9;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 400px;
}

.shop-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(217, 217, 217, 0.3);
}

.item-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.shop-item:hover .product-image {
  transform: scale(1.05);
}

.stock-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #059669;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.stock-badge.out-of-stock {
  background: #DC2626;
}

.item-info {
  padding: 15px;
  flex-grow: 1;
}

.item-name {
  color: #000;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.item-description {
  color: #666;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.tag {
  background: rgba(9, 0, 255, 0.1);
  color: #0900FF;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
}

.item-footer {
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-price {
  color: #000;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.add-to-cart-btn {
  background: #0900FF;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: #0700CC;
}

.add-to-cart-btn:disabled {
  background: #999;
  cursor: not-allowed;
}

.empty-shop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-family: Lexend, -apple-system, Roboto, Helvetica, sans-serif;
}

.empty-shop p {
  margin-bottom: 10px;
  font-size: 18px;
}

.empty-shop code {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

@media (max-width: 1024px) {
  .shop-page {
    padding: 15px;
  }

  .page-title {
    font-size: 32px;
  }

  .shop-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }

  .filter-btn {
    font-size: 12px;
    padding: 6px 12px;
  }
}

@media (max-width: 768px) {
  .shop-page {
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

  .category-filters {
    top: 65px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shop-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 15px;
    top: 110px;
  }

  .shop-item {
    min-height: 350px;
  }

  .item-image {
    height: 150px;
  }

  .item-footer {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }

  .add-to-cart-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .category-filters {
    gap: 8px;
  }

  .filter-btn {
    font-size: 11px;
    padding: 4px 8px;
  }

  .shop-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }

  .shop-item {
    min-height: 320px;
  }

  .item-name {
    font-size: 16px;
  }

  .item-description {
    font-size: 13px;
  }

  .item-price {
    font-size: 18px;
  }
}
</style>
