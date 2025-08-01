# Simple Recipes

A clean, accessible recipe website built with Astro, TypeScript, and Tailwind CSS. No frills, just fills! 🥄

## Features

- **Clean Design**: Minimal interface focused on recipes, not life stories
- **Accessibility First**: Full screen reader support, keyboard navigation, semantic HTML
- **Dual Measurements**: Toggle between metric and imperial units with real-time conversion
- **Smart Filtering**: Filter recipes by category, author, or both simultaneously
- **Mobile Friendly**: Responsive design that works on all devices
- **Fast Loading**: Static site generation with optimized performance
- **No Tracking**: Privacy-focused with no unnecessary scripts or analytics

## Tech Stack

- **Astro** - Static site generator with TypeScript support
- **Tailwind CSS v4** - Utility-first styling with accessibility focus
- **TypeScript** - Strict typing for reliable recipe data management

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:4321/`

## Project Structure

```
src/
├── components/       # Reusable Astro components
│   ├── RecipeCard.astro
│   ├── RecipeDetail.astro
│   └── UnitToggle.astro
├── data/            # Static recipe data
│   └── recipes.ts
├── layouts/         # Page layouts
│   └── Layout.astro
├── pages/           # Route pages
│   ├── index.astro
│   ├── about.astro
│   └── recipe/[id].astro
├── types/           # TypeScript interfaces
│   └── Recipe.ts
└── utils/           # Helper functions
    └── measurements.ts
```

## Adding Recipes

Recipes are managed in `src/data/recipes.ts`. To add a new recipe:

1. Create a new recipe object following the `Recipe` interface
2. Add it to the `recipes` array
3. The site will automatically generate a page at `/recipe/your-recipe-id`

Example recipe structure:
```typescript
{
  id: 'your-recipe-id',
  title: 'Recipe Title',
  author: 'Author Name',
  createdDate: '2024-01-01',
  lastUpdatedDate: '2024-01-15', // optional
  tags: ['category1', 'category2'],
  ingredients: [
    { name: 'flour', amount: 2, unit: 'cups' },
    // ...
  ],
  prepInstructions: ['Step 1', 'Step 2'],
  cookingInstructions: ['Step 1', 'Step 2'],
  prepTimeMinutes: 15,
  cookTimeMinutes: 30,
  servings: 4
}
```

## Philosophy

Simple Recipes was created as an antidote to modern recipe blogs that bury the actual recipe under endless stories and ads. We believe:

- Recipes should be easy to find and follow
- Accessibility shouldn't be an afterthought
- Fast loading matters more than flashy animations
- Privacy is important - no tracking or data collection
- Clean code makes for maintainable sites

## Contributing

This is a personal project showcasing clean, accessible web development practices. The codebase demonstrates:

- Semantic HTML and ARIA best practices
- TypeScript for type safety
- Static site generation for performance
- Mobile-first responsive design
- Progressive enhancement principles