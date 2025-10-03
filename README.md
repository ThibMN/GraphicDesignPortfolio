# Portfolio de Graphiste Indépendant

Un portfolio interactif moderne développé avec Vue.js et TypeScript, présentant mes œuvres avec des effets 3D, une galerie interactive et une boutique intégrée.

## 🚀 Installation et Démarrage

### Prérequis
- **Node.js** version 20.19+ ou 22.12+
- **npm** ou **yarn**

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd Portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

### Scripts disponibles
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build

## 📋 User Story et Conception

📄 **[Voir le design Figma réalisé](./PortfolioGraphiste.png)** - Personas détaillés

📄 **[Voir les deux Personas imaginés](./UserJourney.html)** - Personas détaillés

📄 **[Voir la User Journey complète](https://thibmn.github.io/GraphicDesignPortfolio/UserJourney.html)** - Personas, parcours utilisateur et objectifs du projet

### Objectif principal
Présenter mon travail et mon identité graphique de manière claire, esthétique et professionnelle afin de convaincre et convertir les visiteurs en contactshe idée**

**Titre :** Portfolio de Graphiste Indépendant

**Cible :**

- Recruteurs dans le domaine créatif (agences, studios, startups)
- Clients potentiels (particuliers ou entreprises cherchant un graphiste freelance)
- Collaborateurs potentiels (autres créatifs, photographes, développeurs…)

**Problématique :**  
Comment montrer efficacement mes compétences, mon univers visuel et mon professionnalisme afin d’attirer des opportunités (missions freelance, collaborations, alternance, emploi) ?

**Mission du site (en une phrase) :**  
Présenter mon travail et mon identité graphique de manière claire, esthétique et professionnelle afin de convaincre et convertir les visiteurs en contacts

**Objectif principal :**  
Mettre en valeur mon portfolio et faciliter la prise de contact

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- **Carte d'accueil avec image** pour un aperçu de l'idée créative
- **Transitions fluides** entre les couleurs de fond
- **Navigation intuitive** vers toutes les sections

### 🖼️ Galerie Interactive
- **Chargement automatique** des images depuis `src/assets/gallery/`
- **Descriptions Markdown** avec format style Obsidian
- **Modal de détail** pour chaque œuvre
- **Rendu Markdown** avancé (titres, formatage, citations, listes)
- **Design responsive** avec grille adaptative

📖 **[Guide complet de la Galerie](./src/assets/gallery/README.md)**

### 🛍️ Boutique Automatisée
- **Système de produits JSON** avec chargement automatique
- **Filtrage par catégories** dynamique
- **Cartes de produits** avec images, prix et descriptions
- **Interface d'achat** (prête pour intégration paiement)

📦 **[Guide complet de la Boutique](./src/assets/shop/README.md)**

### 📞 Page À Propos & Contact
- **Présentation personnelle** détaillée
- **Email cliquable** avec fonction `mailto:`
- **Design cohérent** avec le thème du portfolio

## 🎨 Technologies Utilisées

### Frontend
- **Vue.js 3** - Framework JavaScript moderne
- **TypeScript** - Typage statique pour plus de robustesse
- **Vite** - Bundler ultra-rapide pour le développement

### Styling
- **CSS moderne** avec variables et animations
- **Responsive design** pour tous les appareils
- **Effets 3D** et aberration chromatique
- **Transitions fluides** entre les pages

### Architecture
- **Composants modulaires** réutilisables
- **System de chargement automatique** pour images et produits
- **Parser Markdown** intégré pour les descriptions
- **Gestion d'état réactive** avec Vue 3 Composition API

## 📁 Structure du Projet

```
Portfolio/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/         # Composants Vue
│   │   ├── HomePage.vue    # Page d'accueil avec effets 3D
│   │   ├── GalleryPage.vue # Galerie interactive
│   │   ├── ShopPage.vue    # Boutique automatisée
│   │   ├── AboutPage.vue   # À propos & contact
│   │   └── ImageDetailModal.vue # Modal de détail des œuvres
│   │
│   ├── utils/              # Utilitaires et helpers
│   │   ├── galleryLoader.ts # Chargement galerie + Markdown
│   │   ├── imageLoader.ts   # Chargement d'images simple
│   │   └── shopLoader.ts    # Chargement produits JSON
│   │
│   ├── assets/
│   │   ├── gallery/        # Images + descriptions (.md)
│   │   └── shop/           # Produits (.json)
│   │
│   ├── App.vue            # Composant racine
│   └── main.ts            # Point d'entrée
│
├── UserJourney.html       # User Story et conception UX
└── README.md             # Ce fichier
```

## 🔧 Guides d'Utilisation

### 📸 Ajouter des Œuvres à la Galerie
1. **Ajoutez vos images** dans `src/assets/gallery/`
2. **Créez la description** : fichier `.md` avec le même nom
3. **Format** : Titre en `# Première ligne` + description Markdown
4. **Résultat** : Œuvre automatiquement visible avec page de détail

**[📖 Guide détaillé de la Galerie](./src/assets/gallery/README.md)**

### 🛒 Ajouter des Produits à la Boutique
1. **Créez un fichier JSON** dans `src/assets/shop/`
2. **Structure** : `{ "name": "...", "price": 45.00, "description": "...", ... }`
3. **Résultat** : Produit automatiquement visible avec filtres

**[📦 Guide détaillé de la Boutique](./src/assets/shop/README.md)**

## 🎯 Expérience Utilisateur

### Cibles
- **Recruteurs** dans le domaine créatif (agences, studios, startups)
- **Clients potentiels** (particuliers ou entreprises cherchant un graphiste freelance)
- **Collaborateurs potentiels** (autres créatifs, photographes, développeurs)

### Parcours Utilisateur Optimisé
1. **Découverte** → Page d'accueil attractive avec effets 3D
2. **Exploration** → Navigation fluide entre galerie et boutique
3. **Engagement** → Pages de détail riches avec descriptions
4. **Contact** → Email direct depuis la page À propos

**[🎭 User Story Complète](./UserJourney.html)** - Personas détaillés et parcours utilisateur

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Hébergement Recommandé
- **Netlify** - Déploiement automatique depuis Git
- **Vercel** - Optimisé pour les frameworks modernes
- **GitHub Pages** - Gratuit et simple

## 📬 Contact

**Thibaud Mineau**  
📧 [thibaudmineau@gmail.com](mailto:thibaudmineau@gmail.com)