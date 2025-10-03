// Fonction pour charger automatiquement toutes les images du dossier gallery
export function loadGalleryImages() {
  // Utilise Vite's import.meta.glob pour importer tous les fichiers images
  const imageModules = import.meta.glob('/src/assets/gallery/*{.png,.jpg,.jpeg,.gif,.webp,.svg}', {
    eager: true,
    as: 'url'
  })
  
  return Object.entries(imageModules).map(([path, url]) => {
    // Extrait le nom du fichier depuis le chemin
    const fileName = path.split('/').pop() || ''
    const name = fileName.split('.')[0] || 'image'
    
    return {
      url: url as string,
      name: name,
      fileName: fileName
    }
  })
}