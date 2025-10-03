// Interface pour une image avec sa description
export interface GalleryImageWithDescription {
  url: string
  name: string
  fileName: string
  title: string
  description: string
  hasMarkdown: boolean
}

// Fonction pour parser le contenu Markdown
function parseMarkdown(content: string): { title: string; description: string } {
  const lines = content.split('\n')
  let title = ''
  let description = ''
  
  // Cherche le premier titre (ligne commençant par #)
  const titleLine = lines.find(line => line.trim().startsWith('# '))
  if (titleLine) {
    title = titleLine.replace(/^#\s*/, '').trim()
  }
  
  // Prend tout le contenu après le titre comme description
  const titleIndex = lines.findIndex(line => line.trim().startsWith('# '))
  if (titleIndex !== -1) {
    description = lines.slice(titleIndex + 1).join('\n').trim()
  }
  
  return { title, description }
}

// Fonction pour charger automatiquement toutes les images avec leurs descriptions
export function loadGalleryImagesWithDescriptions(): GalleryImageWithDescription[] {
  // Charge les images
  const imageModules = import.meta.glob('/src/assets/gallery/*{.png,.jpg,.jpeg,.gif,.webp,.svg}', {
    eager: true,
    as: 'url'
  })
  
  // Charge les fichiers Markdown
  const markdownModules = import.meta.glob('/src/assets/gallery/*.md', {
    eager: true,
    as: 'raw'
  })
  
  return Object.entries(imageModules).map(([imagePath, imageUrl]) => {
    // Extrait le nom du fichier depuis le chemin
    const fileName = imagePath.split('/').pop() || ''
    const baseName = fileName.split('.')[0] || 'image'
    
    // Cherche le fichier Markdown correspondant
    const markdownPath = imagePath.replace(/\.[^.]+$/, '.md')
    const markdownContent = markdownModules[markdownPath] as string
    
    let title = baseName
    let description = ''
    let hasMarkdown = false
    
    if (markdownContent) {
      const parsed = parseMarkdown(markdownContent)
      title = parsed.title || baseName
      description = parsed.description
      hasMarkdown = true
    }
    
    return {
      url: imageUrl as string,
      name: baseName,
      fileName: fileName,
      title: title,
      description: description,
      hasMarkdown: hasMarkdown
    }
  })
}