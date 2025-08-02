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

## Recipe Format Guidelines

When adding new recipes, follow this structure:

```typescript
export interface Recipe {
  id: string;
  title: string;
  tags: string[];
  author: string;
  createdDate: string;
  lastUpdatedDate?: string;
  ingredients: Ingredient[];
  prepInstructions: string[];
  cookingInstructions: string[];
  additionalNotes?: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
}
```

This is an example of a recipe in TypeScript:

```typescript
{
    id: 'classic-chocolate-chip-cookies',
    title: 'Classic Chocolate Chip Cookies',
    tags: ['dessert', 'cookies', 'quick'],
    author: 'Sarah Baker',
    createdDate: '2024-01-15',
    lastUpdatedDate: '2024-02-10',
    ingredients: [
      { name: 'all-purpose flour', amount: 2.25, unit: 'cups' },
      { name: 'baking soda', amount: 1, unit: 'tsp' },
      { name: 'salt', amount: 1, unit: 'tsp' },
      { name: 'butter', amount: 1, unit: 'cup', notes: 'softened' },
      { name: 'granulated sugar', amount: 0.75, unit: 'cup' },
      { name: 'brown sugar', amount: 0.75, unit: 'cup', notes: 'packed' },
      { name: 'eggs', amount: 2, unit: 'whole', notes: 'large' },
      { name: 'vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'chocolate chips', amount: 2, unit: 'cups' }
    ],
    prepInstructions: [
      'Preheat oven to 375°F (190°C).',
      'In a medium bowl, whisk together flour, baking soda, and salt. Set aside.',
      'In a large bowl, cream together softened butter and both sugars until light and fluffy, about 2-3 minutes.',
      'Beat in eggs one at a time, then stir in vanilla extract.',
      'Gradually mix in the flour mixture until just combined.',
      'Fold in chocolate chips.'
    ],
    cookingInstructions: [
      'Drop rounded tablespoons of dough onto ungreased baking sheets, spacing them about 2 inches apart.',
      'Bake for 9-11 minutes or until edges are golden brown.',
      'Cool on baking sheet for 2 minutes before transferring to a wire rack.'
    ],
    additionalNotes: 'For chewier cookies, slightly underbake them. For crispier cookies, bake for an additional 1-2 minutes.',
    prepTimeMinutes: 15,
    cookTimeMinutes: 11,
    servings: 48
}
```

If you look at this example, you'll see:

- There's no description of the recipe
- The additional notes are optional. Don't abuse this by putting in a story or fluff. Keep it focused on the recipe
- Ingredients are encoded this way so they can be converted between metric and imperial units
- Include both Fº and Cº in the recipe

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