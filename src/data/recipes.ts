import type { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: 'sausage-stuffing',
    title: 'Sausage Stuffing',
    tags: ['Thanksgiving', 'stuffing', 'bread', 'apples'],
    author: 'Mo',
    createdDate: '2025-11-05',
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    servings: 8,
    ingredients: [
      { name: 'stuffing', amount: 1, unit: 'bag', notes: 'from the store, buy what you like or make your own by cubing up bread!'},
      { name: 'sausage', amount: 1, unit: 'tube', notes: 'a traditional pork breakfast sausage is fine but this works with vegetarian sausage too'},
      { name: 'green apples', amount: 3, unit: 'whole', notes: 'tart work best'},
      { name: 'yellow onion', amount: 1, unit: 'whole', notes: 'diced'},
      { name: 'butter', amount: 6, unit: 'tbsp'},
      { name: 'broth', amount: 2, unit: 'cups', notes: 'chicken, turkey, vegetable, or even mushroom broth works well'},
      { name: 'mushrooms', amount: 4, unit: 'oz', notes: 'sliced, cleaned, optional though nice to have, especially if you aren\'t using sausage'},
      { name: 'eggs', amount: 2, unit: 'whole'},
      { name: 'thyme', amount: 2, unit: 'tsp', notes: 'to taste, season with your heart' },
      { name: 'sage', amount: 2, unit: 'tsp', notes: 'to taste, season with your heart' },
      { name: 'other seasonings', notes: 'garlic powder, paprika, parsley, bay leaf, do what you like' },
      { name: 'salt and pepper', amount: 3, unit: 'tsp', notes: 'to taste' },
    ],
    additionalNotes: 'If you are making this vegetarian, a pinch or two of MSG helps impart a meaty flavor. Just add it to the broth. You can get it at most grocery stores in the international aisle.',
    prepInstructions: [
      'Dice the onion',
      'Peel and core the apples, and then dice them',
      'Clean and slice the mushrooms',
      'Preheat the oven to 325ºF (165ºC)',
      'If your bread is not crispy, toast it in the oven at 325ºF (165ºC) for 5-10 minutes until it is crispy and crunchy.',
    ],
    cookingInstructions: [
      'In a large pan cook the sausage until it is browned and cooke through. Remove and set aside, reserving the fat in the pan',
      'Add the mushrooms and cook until they give up their liquid, about 5 minutes.',
      'Add the onion and cook until softened, about 5 minutes.',
      'Add the apples and cook until softened, about 5 minutes.',
      'Add the sausage back to the pan and cook until heated through.',
      'Add the thyme, sage, other seasonings, and salt and pepper and mix well. If using the MSG add it now.',
      'Remove the pan from the heat and let the ingredients cool. Mix the sausage apple mixture with the bread in a large baking dish. Combine well.',
      'In a bowl or measuring cup beat the eggs into the broth until well mixed.',
      'Pour the egg and broth mixture over the bread stuffing and mix so all the ingredients are well combined and the liquid is absorbed.',
      'Cover the dish tightly with foil and bake for 25-35 minutes. Remove the foil and bake for another 5-10 minutes until the top is browned and the stuffing is heated through.',
      'Serve hot'
    ]
  },
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
  },
  {
    id: 'english-meat-pie',
    title: 'English meat pie',
    tags: ['dinner', 'meat', 'English', 'savory', 'pastry'],
    author: 'Mo',
    createdDate: '2025-11-04',
    additionalNotes: 'Takes a while to make but is worth it',
    prepTimeMinutes: 120,
    cookTimeMinutes: 240,
    servings: 6,
    ingredients: [
      { name: 'butter', amount: 4, unit: 'tbsp'},
      { name: 'yellow onion', amount: 1, unit: 'whole', notes: 'diced'},
      { name: 'mushrooms', amount: 8, unit: 'oz', notes: 'sliced, cleaned'},
      { name: 'garlic', amount: 3, unit: 'tbsp', notes: 'minced'},
      { name: 'beef stock', amount: 2, unit: 'cups'},
      { name: 'bitter English beer', amount: 1, unit: 'cup' },
      { name: 'Worcestershire sauce', amount: 2, unit: 'tbsp' },
      { name: 'tomato paste', amount: 2, unit: 'tbsp', },
      { name: 'bay leaf', amount: 1, unit: 'whole' },
      { name: 'rosemary', notes: 'to taste, one sprig if fresh' },
      { name: 'thyme', notes: 'to taste, one sprig if fresh' },
      { name: 'stew beef', amount: 2, unit: 'lb', notes: 'cubed' },
      { name: 'salt and pepper', notes: 'to taste' },
      { name: 'large eggs', amount: 1, unit: 'whole', notes: 'for the egg wash on top of the puff pastry when baking'},
      { name: 'puff pastry', amount: 1, notes: 'frozen from store is fine. follow directions on the package to thaw.' },
    ],
    prepInstructions: [

    ],
    cookingInstructions: [
      'Brown the beef in a large pot or Dutch oven over medium-high heat, adding a little oil if needed. Remove and set aside.',
      'Add the onion and garlic and cook until softened, about 5 minutes.',
      'Add the mushrooms and cook until they give up their liquid, about 5 minutes.',
      'Add the stock, Worcestershire sauce, tomato paste, bay leaf, rosemary, thyme, and salt and pepper. Bring to a boil, then reduce to a simmer and cook for 1-2 hours until the beef is tender. You can simmer in the oven for longer at 300ºF if you prefer.',
      'Remove the bay leaf, rosemary, and thyme sprigs. Taste and adjust seasoning.',
      'After the beef has cooked, let it cool, preferably in the fridge for at least 1 day. If you put the filling hot into the pastry you will get the dreaded "soggy bottom".',
      'When preparing to bake preheat the oven to 400ºF. Prepare the puff pastry. Unwrap the pastry and roll it out on a lightly floured surface to a thickness of about 1/4 inch. Cut it into 6 equal rectangles.',
      'Assemble the pies by placing a rectangle of puff pastry on a work surface. Spoon some of the beef mixture into the center of the pastry. Fold the pastry over to make a triangle, pressing the edges to seal. Repeat with the remaining pastry and filling.',
      "After assembling the pies, brush the tops with the egg wash and sprinkle with coarse salt. Maldon salt is traditional but kosher salt is fine!",
      'Bake the pies in the preheated oven for 25-30 minutes until the pastry is golden brown and the filling is heated through.',
      'Try to let the pies cool for at least 5-10 minutes before serving. The struggle is real.'
    ]
  },
  {
    id: 'cranberry-compote',
    title: 'Cranberry Compote',
    tags: ['Thanksgiving', 'cranberries', 'sweet', 'compote', 'fruit', 'citrus'],
    author: 'Mo',
    createdDate: '2025-11-05',
    additionalNotes: 'A step up from the canned cranberry sauce',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 8,
    ingredients: [
      { name: 'fresh cranberries', amount: 0.5, unit: 'lb'},
      { name: 'lemon zest', amount: 1, unit: 'tsp', notes: 'zest from 1 lemon'},
      { name: 'lemon juice', amount: 3, unit: 'tbsp', notes: 'from 1 lemon'},
      { name: 'lime zest', amount: 1, unit: 'tsp', notes: 'zest from 1 lime'},
      { name: 'lime juice', amount: 3, unit: 'tbsp', notes: 'from 1 lime'},
      { name: 'orange zest', amount: 1, unit: 'tsp', notes: 'zest from 1 orange'},
      { name: 'orange juice', amount: 0.25, unit: 'cup', notes: 'from 1 orange'},
      { name: 'granulated sugar', amount: 0.5, unit: 'cup'},
      { name: 'clove', amount: 2, unit: 'pinch',  notes: 'to taste' },
      { name: 'nutmeg', amount: 1, unit: 'pinch', notes: 'to taste' },
      { name: 'vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'water', amount: 2, unit: 'cup', notes: '1 1/2 cups water for the cranberries and 1/2 cup for the slurry' },
      { name: 'cornstarch', amount: 3, unit: 'tbsp', notes: 'for the slurry' },
    ],
    prepInstructions: [
      'Rinse the cranberries and make sure there are no stems on them. Throw out any that look sad.',
      'Zest the lemons, limes, and orange.',
      'Juice the lemons, limes, and orange.',
      'Mix the cornstarch with 1/2 cup of water to make a slurry. This will be used at the end of the cooking to thicken the sauce. If the cornstarch and water separate just mix again until your fork moves smoothly through it and it looks like thin milk.',
    ],
    cookingInstructions: [
      'Put the cranberries, the zests, the sugar, the vanilla, the orange juice, the spices, and 1 1/2 cup of water in a non-reactive saucepan and boil for about 8 minutes on medium-high heat. You should see the cranberries start to break apart.',
      'Mix in the well-mixed slurry and cook for an additional 2 minutes while stirring constantly.',
      'Let it cool completely before serving. Resist the urge to taste it before it has cooled completely of you will burn your tongue. Trust me.'
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