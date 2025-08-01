# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Simple Recipes is an accessibility-first recipe website built with Astro, TypeScript, and Tailwind CSS. The site focuses on clean, minimal design with no unnecessary bloat - "no frills, just fills!"

## Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Architecture

### Core Data Structure
- **Recipe Interface**: Located in `src/types/Recipe.ts` with required fields including author, creation/update dates, and ingredient specifications
- **Recipe Data**: Static recipe data in `src/data/recipes.ts` with helper functions for filtering by tags/authors
- **Measurement System**: Dual metric/imperial support with conversion utilities in `src/utils/measurements.ts`

### Component Architecture
- **Layout.astro**: Main layout with semantic HTML, accessibility features (skip links, ARIA labels), and navigation
- **RecipeCard.astro**: Recipe preview cards with metadata display (author, dates, tags)  
- **RecipeDetail.astro**: Full recipe view with numbered steps and ingredient lists
- **UnitToggle.astro**: Client-side measurement conversion with localStorage persistence

### Page Structure
- **Index**: Recipe listing with dual filtering (category + author) using TypeScript classes for state management
- **About**: Static content page explaining the site's philosophy
- **Dynamic Routes**: `[id].astro` generates static pages for each recipe using `getStaticPaths()`

### Key Features
- **Accessibility**: Full screen reader support, keyboard navigation, semantic HTML, ARIA labels throughout
- **Measurement Conversion**: Real-time switching between metric/imperial units with fraction formatting
- **Filtering**: Combined category and author filtering with screen reader announcements
- **TypeScript**: Strict typing for all recipe data and component props
- **Static Generation**: All pages pre-built for optimal performance

### Data Management
Recipe data is managed statically in TypeScript files. To add new recipes:
1. Add recipe object to `recipes` array in `src/data/recipes.ts`
2. Ensure all required Recipe interface fields are populated
3. Recipe pages auto-generate via dynamic routing

### Styling Approach
Uses Tailwind CSS v4 with focus on:
- Mobile-first responsive design
- High contrast ratios for accessibility
- Consistent spacing and typography
- Minimal color palette (grays, blues, greens)