# Dossier Gallery

Ce dossier contient toutes les images qui seront automatiquement affichées dans la galerie de votre portfolio, avec leurs descriptions optionnelles.

## Formats supportés

### Images
- `.png`
- `.jpg` / `.jpeg`
- `.gif`
- `.webp`
- `.svg`

### Descriptions
- `.md` (Markdown)

## Comment ajouter des images avec descriptions

### 1. Ajouter une image
Placez votre image dans ce dossier : `mon-artwork.jpg`

### 2. Créer la description (optionnel)
Créez un fichier Markdown avec le même nom : `mon-artwork.md`

#### Format du fichier Markdown (style Obsidian)
```markdown
# Titre de l'œuvre

Description de votre œuvre en **Markdown**.

## Sous-titre
Vous pouvez utiliser :
- **Gras**
- *Italique*
- ## Titres
- > Citations
- Listes à puces

### Détails techniques
- **Technique** : Huile sur toile
- **Dimensions** : 50x70cm
- **Année** : 2024
```

## Structure automatique

Pour `artwork.jpg` + `artwork.md` :
- **Titre** : Extrait de la première ligne `# Titre`
- **Description** : Tout le contenu Markdown suivant
- **Page de détail** : Accessible en cliquant sur l'image

## Fonctionnalités

### ✅ Galerie interactive
- **Clic sur image** → Page de détail complète
- **Icône 📖** → Indique qu'une description existe
- **Titre automatique** → Depuis le Markdown ou nom de fichier

### ✅ Rendu Markdown
- **Formatage** : Gras, italique, titres, listes
- **Citations** : Avec style personnalisé
- **Responsive** : Adaptatif mobile/desktop

### ✅ Expérience utilisateur
- **Modal élégante** : Affichage plein écran
- **Navigation** : Fermeture facile (clic extérieur/bouton)
- **Performance** : Lazy loading des images

## Exemples inclus

- `artwork-1.svg` + `artwork-1.md`
- `painting-2.svg` + `painting-2.md` 
- `design-3.svg` + `design-3.md`

## Notes importantes

- **Noms identiques** : `image.jpg` et `image.md` doivent avoir le même nom de base
- **Titre obligatoire** : Commencez par `# Titre` dans le Markdown
- **Markdown simple** : Support des éléments de base (pas de tableaux complexes)
- **Fallback** : Si pas de `.md`, utilise le nom du fichier comme titre