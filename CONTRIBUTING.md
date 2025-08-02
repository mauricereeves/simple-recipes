# Contributing to Simple Recipes

Thank you for your interest in contributing to Simple Recipes! We welcome contributions that align with our philosophy of keeping recipes simple, accessible, and free from bloat.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Issues

- Use the GitHub issue tracker to report bugs or suggest features
- Search existing issues before creating a new one
- Provide clear, detailed descriptions with steps to reproduce bugs
- Include your browser version and operating system when reporting bugs

### Submitting Changes

1. **Fork the repository** and create a new branch from `main`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Submit a pull request** with a clear description of your changes

### Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/simple-recipes.git
cd simple-recipes

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Contribution Guidelines

### Recipe Contributions

- **Keep it simple**: Recipes should be straightforward and accessible
- **No life stories**: Focus on the recipe itself, not personal anecdotes
- **Clear instructions**: Use numbered steps with clear, concise language
- **Proper measurements**: Include both metric and imperial when possible
- **Test your recipes**: Only submit recipes you've actually made and tested

### Code Contributions

- **Accessibility first**: All changes must maintain WCAG 2.1 AA compliance
- **Performance matters**: Keep the site fast and lightweight
- **Mobile-friendly**: Ensure all changes work well on mobile devices
- **Semantic HTML**: Use proper HTML elements and ARIA labels
- **Clean code**: Follow existing code style and patterns

### What We DON'T Want

- Pop-ups, overlays, or intrusive UI elements
- Tracking scripts or analytics that compromise privacy
- Heavy JavaScript frameworks or unnecessary dependencies
- Auto-playing media or animations
- Newsletter signup forms or marketing content
- Ads or monetization features

## Coding Standards

### HTML/Astro
- Use semantic HTML elements
- Include proper ARIA labels and roles
- Ensure keyboard navigation works
- Test with screen readers

### CSS/Tailwind
- Follow existing Tailwind patterns
- Maintain consistent spacing and typography
- Ensure sufficient color contrast (4.5:1 minimum)
- Test responsive design on multiple screen sizes

### JavaScript
- Keep JavaScript minimal and progressive
- Ensure the site works without JavaScript
- Use modern ES6+ syntax
- Comment complex logic

## Testing

Before submitting a pull request:

- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Verify accessibility with screen reader
- [ ] Check keyboard navigation
- [ ] Validate HTML markup
- [ ] Test print styles
- [ ] Ensure fast loading times

## Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Add or update tests** for new features
3. **Follow commit message conventions**: Use clear, descriptive commit messages
4. **Keep PRs focused**: One feature or fix per pull request
5. **Be responsive**: Address feedback and requested changes promptly

### Commit Message Format

```text
type: brief description

Longer explanation if needed, wrapped at 72 characters.

- List any breaking changes
- Reference issues: Fixes #123
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

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

## Getting Help

- Check existing documentation and issues first
- Ask questions in GitHub Discussions
- Be specific about what you're trying to achieve
- Include relevant code snippets or error messages

## Recognition

All contributors will be acknowledged in our contributors list. We appreciate every contribution, whether it's fixing a typo, adding a recipe, or implementing new features.

## License

By contributing to Simple Recipes, you agree that your contributions will be licensed under the MIT License.

---

Remember: Simple Recipes exists to push back against the bloated, ad-heavy recipe sites that plague the internet. Every contribution should support our mission of providing clean, accessible, and straightforward recipes without the cruft.

Thank you for helping make cooking more accessible for everyone! 🥄
