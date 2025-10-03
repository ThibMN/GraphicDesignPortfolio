# Dossier Shop

Ce dossier contient tous les produits qui seront automatiquement affichés dans la boutique de votre portfolio.

## Structure d'un produit JSON

Chaque produit doit être un fichier JSON avec la structure suivante :

```json
{
  "id": "identifiant-unique",
  "name": "Nom du produit",
  "price": 45.00,
  "description": "Description détaillée du produit",
  "image": "chemin/vers/image.jpg",
  "category": "Catégorie",
  "inStock": true,
  "tags": ["tag1", "tag2", "tag3"]
}
```

## Champs obligatoires

- **`id`** : Identifiant unique du produit (string)
- **`name`** : Nom du produit (string)
- **`price`** : Prix en euros (number)

## Champs optionnels

- **`description`** : Description du produit (string)
- **`image`** : Chemin vers l'image du produit (string)
- **`category`** : Catégorie pour le filtrage (string, défaut: "Général")
- **`inStock`** : Disponibilité (boolean, défaut: true)
- **`tags`** : Étiquettes pour la recherche (array de strings)

## Exemple complet

```json
{
  "id": "print-abstract-001",
  "name": "Impression Abstraite Limitée",
  "price": 75.50,
  "description": "Une impression sur toile de haute qualité de mon œuvre abstraite originale. Édition limitée à 50 exemplaires, signée et numérotée.",
  "image": "/src/assets/gallery/abstract-artwork.jpg",
  "category": "Prints",
  "inStock": true,
  "tags": ["abstract", "limited-edition", "canvas", "signed"]
}
```

## Catégories suggérées

- **Prints** : Impressions et reproductions
- **Digital** : Art numérique et téléchargements
- **Commission** : Œuvres sur commande
- **Original** : Œuvres originales
- **Merchandise** : Produits dérivés

## Images

- Utilisez des chemins relatifs : `/src/assets/gallery/image.jpg`
- Formats recommandés : JPG, PNG, WEBP
- Résolution recommandée : 800x600px minimum

## Fonctionnalités automatiques

1. **Chargement automatique** : Tous les fichiers JSON sont chargés au démarrage
2. **Filtrage par catégorie** : Interface automatique si plusieurs catégories
3. **Formatage des prix** : Affichage automatique en euros
4. **Gestion du stock** : Badge visuel pour la disponibilité
5. **Tags** : Affichage des 3 premiers tags
6. **Responsive** : Adaptation automatique à tous les écrans

## Comment ajouter un produit

1. Créez un nouveau fichier `.json` dans ce dossier
2. Respectez la structure ci-dessus
3. Le produit apparaîtra automatiquement dans la boutique

Exemple : `nouveau-produit.json`