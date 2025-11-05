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

export interface Ingredient {
  name: string;
  amount?: number;
  unit?: MeasurementUnit;
  notes?: string;
}

export type MeasurementUnit = 
  | 'cup' | 'cups'
  | 'tbsp' | 'tsp'
  | 'oz' | 'lb'
  | 'g' | 'kg'
  | 'ml' | 'l'
  | 'piece' | 'pieces'
  | 'clove' | 'cloves'
  | 'inch' | 'inches'
  | 'cm'
  | 'pinch' | 'dash'
  | 'whole' | 'bunch'
  | 'bag' | 'bags';

export type UnitSystem = 'metric' | 'imperial';
export type TemperatureUnit = 'celsius' | 'fahrenheit';

export interface UserPreferences {
  unitSystem: UnitSystem;
  temperatureUnit: TemperatureUnit;
}