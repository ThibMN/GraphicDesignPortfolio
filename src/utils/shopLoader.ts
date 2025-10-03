// Interface pour définir la structure d'un produit
export interface ShopItem {
  id: string
  name: string
  price: number
  description?: string
  image: string
  category?: string
  inStock?: boolean
  tags?: string[]
}

// Fonction pour charger automatiquement tous les produits du dossier shop
export function loadShopItems(): ShopItem[] {
  // Utilise Vite's import.meta.glob pour importer tous les fichiers JSON
  const itemModules = import.meta.glob('/src/assets/shop/*.json', {
    eager: true,
    as: 'json'
  })
  
  return Object.entries(itemModules).map(([path, data]) => {
    const fileName = path.split('/').pop() || ''
    const fileId = fileName.replace('.json', '')
    
    // Validation et structuration des données
    const item = data as any
    
    return {
      id: item.id || fileId,
      name: item.name || 'Produit sans nom',
      price: typeof item.price === 'number' ? item.price : 0,
      description: item.description || '',
      image: item.image || '',
      category: item.category || 'Général',
      inStock: item.inStock !== false, // true par défaut
      tags: Array.isArray(item.tags) ? item.tags : []
    } as ShopItem
  }).filter(item => item.name !== 'Produit sans nom') // Filtre les produits invalides
}