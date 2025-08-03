import type { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
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
  },
  {
    id: 'simple-pasta-marinara',
    title: 'Simple Pasta Marinara',
    tags: ['dinner', 'pasta', 'vegetarian', 'quick'],
    author: 'Marco Romano',
    createdDate: '2024-01-20',
    ingredients: [
      { name: 'pasta', amount: 1, unit: 'lb', notes: 'spaghetti or penne' },
      { name: 'olive oil', amount: 3, unit: 'tbsp' },
      { name: 'garlic', amount: 4, unit: 'cloves', notes: 'minced' },
      { name: 'crushed tomatoes', amount: 28, unit: 'oz', notes: 'canned' },
      { name: 'salt', amount: 1, unit: 'tsp' },
      { name: 'black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'dried basil', amount: 1, unit: 'tsp' },
      { name: 'dried oregano', amount: 1, unit: 'tsp' },
      { name: 'parmesan cheese', amount: 0.5, unit: 'cup', notes: 'grated, for serving' }
    ],
    prepInstructions: [
      'Bring a large pot of salted water to boil for pasta.',
      'Mince garlic cloves.',
      'Grate parmesan cheese if not pre-grated.'
    ],
    cookingInstructions: [
      'Cook pasta according to package directions until al dente. Reserve 1 cup pasta water before draining.',
      'Meanwhile, heat olive oil in a large skillet over medium heat.',
      'Add minced garlic and cook for 30 seconds until fragrant.',
      'Add crushed tomatoes, salt, pepper, basil, and oregano. Simmer for 10-15 minutes.',
      'Add drained pasta to the sauce and toss to combine.',
      'Add pasta water a little at a time if needed to achieve desired consistency.',
      'Serve immediately with grated parmesan cheese.'
    ],
    additionalNotes: 'Fresh basil leaves make an excellent garnish. Add them just before serving.',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 4
  },
  {
    id: 'banana-bread',
    title: 'Moist Banana Bread',
    tags: ['breakfast', 'bread', 'baking'],
    author: 'Emma Kitchen',
    createdDate: '2024-01-10',
    ingredients: [
      { name: 'all-purpose flour', amount: 1.75, unit: 'cups' },
      { name: 'baking soda', amount: 1, unit: 'tsp' },
      { name: 'salt', amount: 0.5, unit: 'tsp' },
      { name: 'butter', amount: 0.5, unit: 'cup', notes: 'melted' },
      { name: 'brown sugar', amount: 0.75, unit: 'cup', notes: 'packed' },
      { name: 'egg', amount: 1, unit: 'whole', notes: 'beaten' },
      { name: 'vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'ripe bananas', amount: 3, unit: 'whole', notes: 'mashed' }
    ],
    prepInstructions: [
      'Preheat oven to 350°F (175°C).',
      'Grease a 4x8 inch loaf pan.',
      'In a large bowl, combine flour, baking soda, and salt.',
      'Mash bananas in a separate bowl until smooth.'
    ],
    cookingInstructions: [
      'In another bowl, mix melted butter and brown sugar.',
      'Stir in beaten egg and vanilla extract.',
      'Add mashed bananas and mix well.',
      'Pour the wet ingredients into the flour mixture and stir until just combined.',
      'Pour batter into prepared loaf pan.',
      'Bake for 60-65 minutes or until a toothpick inserted in center comes out clean.',
      'Cool in pan for 10 minutes before turning out onto a wire rack.'
    ],
    additionalNotes: 'The riper the bananas, the more flavorful your bread will be. Look for bananas with brown spots.',
    prepTimeMinutes: 15,
    cookTimeMinutes: 65,
    servings: 8
  },
  {
    id: 'chicken-stir-fry',
    title: 'Quick Chicken Stir Fry',
    tags: ['dinner', 'chicken', 'healthy', 'quick'],
    author: 'Chef Alex',
    createdDate: '2024-01-25',
    lastUpdatedDate: '2024-01-30',
    ingredients: [
      { name: 'chicken breast', amount: 1, unit: 'lb', notes: 'cut into strips' },
      { name: 'vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'bell peppers', amount: 2, unit: 'whole', notes: 'sliced' },
      { name: 'broccoli florets', amount: 2, unit: 'cups' },
      { name: 'carrots', amount: 2, unit: 'whole', notes: 'sliced thin' },
      { name: 'garlic', amount: 3, unit: 'cloves', notes: 'minced' },
      { name: 'ginger', amount: 1, unit: 'tbsp', notes: 'fresh, minced' },
      { name: 'soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'oyster sauce', amount: 2, unit: 'tbsp' },
      { name: 'cornstarch', amount: 1, unit: 'tsp' },
      { name: 'sesame oil', amount: 1, unit: 'tsp' }
    ],
    prepInstructions: [
      'Cut chicken into thin strips.',
      'Slice bell peppers and carrots.',
      'Cut broccoli into bite-sized florets.',
      'Mince garlic and ginger.',
      'Mix soy sauce, oyster sauce, cornstarch, and sesame oil in a small bowl.'
    ],
    cookingInstructions: [
      'Heat 1 tablespoon oil in a large wok or skillet over high heat.',
      'Add chicken and stir-fry for 3-4 minutes until cooked through. Remove and set aside.',
      'Add remaining oil to the pan.',
      'Add carrots and broccoli, stir-fry for 2 minutes.',
      'Add bell peppers, garlic, and ginger. Stir-fry for another 2 minutes.',
      'Return chicken to the pan.',
      'Pour sauce over everything and toss to coat.',
      'Cook for 1-2 minutes until sauce thickens.',
      'Serve immediately over rice.'
    ],
    additionalNotes: 'Serve over steamed rice or noodles. Feel free to substitute vegetables based on what you have available.',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4
  },
  {
    id: 'classic-mac-and-cheese',
    title: 'Classic Mac and Cheese',
    tags: ['classic', 'pasta', 'cheese', 'hearty'],
    author: 'Mo',
    createdDate: '2025-08-02',
    ingredients: [
      { name: 'elbow macaroni or cavatappi', amount: 1, unit:'lb' },
      { name: 'butter', amount: 6, unit:'tbsp', notes: 'salted or unsalted, either is fine' },
      { name: 'all-purpose flour', amount: 0.5, unit:'cup' },
      { name: 'whole milk', amount: 3, unit:'cup', notes: 'room temperature' },
      { name: 'heavy cream', amount: 1, unit:'cup' },
      { name: 'sharp cheddar cheese', amount: 12, unit:'oz', notes: 'shredded' },
      { name: 'gruyere or swiss cheese', amount: 8, unit:'oz', notes: 'shredded' },
      { name: 'cream cheese', amount: 4, unit:'oz', notes: 'softened' },
      { name: 'Dijon mustard', amount: 2, unit:'tsp'},
      { name: 'garlic powder', amount: 1, unit:'tsp'},
      { name: 'smoked paprika', amount: 1, unit:'tsp'},
      { name: 'salt and white pepper', notes: 'to taste'},
      { name: 'panko breadcrumbs', amount: 1, unit:'cup', notes: 'optional topping'},
      { name: 'melted butter', amount: 2, unit:'tbsp', notes: 'in addition to butter above, mixed with the panko for topping'}
    ],
    prepInstructions: [
      'Preheat oven to 375°F (190°C).',
      'If not already shredded, shred the cheddar and gruyere cheeses',
      'Set out milk and cream to get to room temp',
      '[Optional] - In a pan melt the butter and fold in the bread crumbs. Season with salt and pepper to taste'
    ],
    cookingInstructions: [
      'Cook the pasta to just shy of al dente. It will will finish in the oven. Drain and set aside',
      'Make a roux with butter and flou, cooking until 2-3 minutes until just lightly gold in color. Stir constantly.',
      'Gradually whisk in milk and cream and cook until thickened',
      'Off the heat, stir in the cream cheese, and mustard, and added shredded cheeses',
      'Season the cheese sauce with the garlic powder, paprika, salt, and pepper. Add other seasonings you like. A pinch of chipotle or cayenne is nice.',
      'Mix the cheese sauce and pasta together until well mixed and place in a baking dish',
      'If using the bread crumbs, top with the buttered breadcrumbs',
      'Bake for 25-30 minutes until the top is golden brown.',
      'Pull out of the oven and let it sit for 5 minutes before serving.'
    ],
    additionalNotes: 'Depending on your oven, it may only need 25 minutes. Check then. The amount of cheese should be viewed as the minimum. Add more if you want. Cook with your heart.',
    cookTimeMinutes: 30,
    prepTimeMinutes: 20,
    servings:4
  },
  {
    id: 'mujadara',
    title: 'Mujadara',
    tags: ['vegetarian', 'vegan', 'lentils', 'Middle Eastern'],
    author: 'Mo',
    createdDate: '2025-08-02',
    ingredients: [ 
      { name: 'brown or green lentils', amount: 1, unit: 'cup'},
      { name: 'basmati rice', amount: 1, unit: 'cup' },
      { name: 'large yellow onion', amount: 3, unit: 'whole', notes: 'thinly sliced' },
      { name: 'olive oil', amount: 0.25, unit: 'cup', notes: 'plus extra for cooking onions' },
      { name: 'ground cumin', amount: 1.5, unit: 'tsp' },
      { name: 'cinnamon', amount: 0.25, unit: 'tsp', notes: 'just a hint, it shouldn\'t dominate' },
      { name: 'allspice', amount: 0.25, unit: 'tsp' },
      { name: 'salt', amount: 1.5, unit: 'tsp', notes: 'this is the minimum but add more if you desire' },
      { name: 'black pepper', amount: 0.25, unit: 'tsp' },
      { name: 'bay leaf', amount: 2, unit: 'whole', notes: 'remove after cooking' },
      { name: 'vegetable broth', amount: 4, unit: 'cup' },
      { name: 'water', amount: 3, unit: 'cup', notes: 'for cooking the lentils' },
      { name: 'fresh parsley', amount: 1, unit: 'cup', notes: 'for garnish (optional)' },
      { name: 'lemon', amount: 1, unit: 'whole', notes: 'for garnish (optional)' },
      { name: 'plain greek yogurt', amount: 1, unit: 'cup', notes: 'for garnish (optional)' }  
    ],
    prepInstructions: [],
    cookingInstructions: [
      'Bring the lentils and water to a boil and simmer for 15-20 minutes until tender. Drain and set aside',
      'Carmelize the onions in a large skillet over medium heat, cooking slowly for 20-30 minutes until they are deep golden brown and caramelized. Remove half the onions and set aside for garnish',
      'Add the cooked lentils to the remaining onions in the pan. Add the cumin, cinnamon, allspice, salt, and pepper. Stir for two minutes',
      'Stir in the rice and vegetable broth and bay leaves. Bring to a boil, then reduce to low heat, cover, and simmer for 15-18 minutes until rice is tender and liquid is absorbed',
      'Let stand for 10 minutes and then fluff with a fork. Top with the reserved caramelized onions.'
    ],
    additionalNotes: 'Serve warm with a dollop of plain greek yogurt, chopped fresh parsley, and a squeeze of lemon juice.',
    prepTimeMinutes: 0,
    cookTimeMinutes: 70,
    servings: 4
  },
  {
    id: 'shakshuka',
    title: 'Shakshuka',
    tags: ['breakfast', 'eggs', 'North African', 'vegetarian'],
    author: 'Mo',
    createdDate: '2025-08-02',
    additionalNotes: 'Serve with warm crusty bread for mopping up the sauce',
    prepTimeMinutes: 0,
    cookTimeMinutes: 45,
    servings: 6,
    ingredients: [
      { name: 'olive oil', amount: 2, unit: 'tbsp'},
      { name: 'yellow onion', amount: 1, unit: 'whole', notes: 'diced'},
      { name: 'bell pepper', amount: 1, unit: 'whole', notes: 'diced, use poblano if you have a latex allergy'},
      { name: 'garlic', amount: 5, unit: 'clove', notes: 'minced'},
      { name: 'jalapeño', amount: 2, unit: 'whole', notes: 'minced, leaving seeds in for heat'},
      { name: 'harissa powder', amount: 2, unit: 'tbsp' },
      { name: 'ground cumin', amount: 1, unit: 'tsp' },
      { name: 'sweet or smoked paprika', amount: 1, unit: 'tsp', },
      { name: 'hot paprika', amount: 1, unit: 'tsp', },
      { name: 'ground coriander', amount: 0.5, unit: 'tsp' },
      { name: 'ground cinnamon', amount: 0.25, unit: 'tsp' },
      { name: 'canned San Marzano tomatoes', amount: 28, unit: 'oz', notes: 'crush by hand'},
      { name: 'sugar', amount: 0.5, unit: 'tsp' },
      { name: 'feta', amount: 0.5, unit: 'cup', notes: 'optional' },
      { name: 'salt and pepper', notes: 'to taste' },

      { name: 'large eggs', amount: 6, unit: 'whole' },
      { name: 'fresh parsley', amount: 1, unit: 'cup' },
      { name: 'crusty bread', amount: 1, unit: 'whole', notes: 'loaf, for dipping' },
    ],
    prepInstructions: [

    ],
    cookingInstructions: [
      'Heat the oil in a cast iron or heavy skillet. Sauté onion and bell pepper until soft, 8-10 minutes',
      'Add garlic and hot peppers, cook for 1 minute. Add hariss and all spices, cooking until fragrant, 30 seconds',
      'Add tomatoes, sugar, salt, and pepper. Simmer 15-20 minutes until thickend and rich. Taste and adjust heat.',
      'Make wells in the sauce and crack eggs into each. Cover and cook 8-12 minutes until the whites are set but the yolks are still runny',
      'Scatter with feta if desired and garnish with herbs'
    ]
  }
];

// all our functions to get the recipes, tags, etc
export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function getRecipesByTag(tag: string): Recipe[] {
  return recipes.filter(recipe => recipe.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allTags = recipes.flatMap(recipe => recipe.tags);
  return [...new Set(allTags)].sort();
}

export function getAllAuthors(): string[] {
  const allAuthors = recipes.map(recipe => recipe.author);
  return [...new Set(allAuthors)].sort();
}

export function getRecipesByAuthor(author: string): Recipe[] {
  return recipes.filter(recipe => recipe.author === author);
}

export function getTagsWithCounts(): Array<{ tag: string; count: number }> {
  const tagCounts: Record<string, number> = {};
  
  recipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getTopTags(limit: number = 8): string[] {
  return getTagsWithCounts()
    .slice(0, limit)
    .map(item => item.tag);
}