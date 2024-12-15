# Modern Book Search

Modern Book Search est une application web permettant aux utilisateurs de rechercher, découvrir et gérer leurs livres préférés. Construite avec Next.js, Tailwind CSS, et l'API Google Books, cette application offre une expérience de recherche de livres rapide, intuitive et visuellement attrayante.

## Fonctionnalités

- 🔍 Recherche rapide et efficace de livres
- 📚 Affichage détaillé des informations sur les livres
- ⭐ Gestion des livres favoris
- 📱 Design responsive pour une expérience optimale sur tous les appareils
- 🎨 Interface utilisateur moderne et attrayante

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Node.js (version 14.0.0 ou supérieure)
- npm (généralement installé avec Node.js)

## Installation

1. Clonez le dépôt :
   \`\`\`
   https://github.com/steeven-louk/modern-book-search.git
   \`\`\`

2. Naviguez dans le dossier du projet :
   \`\`\`
   cd modern-book-search
   \`\`\`

3. Installez les dépendances :
   \`\`\`
   npm install
   \`\`\`



## Utilisation

Pour lancer l'application en mode développement :

\`\`\`
npm run dev
\`\`\`

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Structure du Projet

\`\`\`
modern-book-search/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── book/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── favorites/
│   │   └── page.tsx
│   ├── search/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── BookGallery.tsx
│   ├── FeatureCard.tsx
│   ├── Navbar.tsx
│   ├── Pagination.tsx
│   ├── SearchBar.tsx
│   └── TestimonialCard.tsx
│   └── scrollToTop.tsx
│   └── heros.tsx
│   └── footer.tsx
│
│
├── README.md
├── next.config.js
├── package.json
└── tailwind.config.js
\`\`\`

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (\`git checkout -b feature/AmazingFeature\`)
3. Committez vos changements (\`git commit -m 'Add some AmazingFeature'\`)
4. Poussez vers la branche (\`git push origin feature/AmazingFeature\`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir \`LICENSE\` pour plus d'informations.

## Contact

[@LinkedIn](https://www.linkedin.com/in/steeven-loukanou/) - linkedin.com/in/steeven-loukanou

Lien du projet : https://github.com/steeven-louk/modern-book-search.git