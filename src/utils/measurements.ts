import type { MeasurementUnit, UnitSystem } from '../types/Recipe';

const IMPERIAL_TO_METRIC: Record<string, { unit: MeasurementUnit; multiplier: number }> = {
  'cup': { unit: 'ml', multiplier: 236.588 },
  'cups': { unit: 'ml', multiplier: 236.588 },
  'tbsp': { unit: 'ml', multiplier: 14.787 },
  'tsp': { unit: 'ml', multiplier: 4.929 },
  'oz': { unit: 'g', multiplier: 28.35 },
  'lb': { unit: 'kg', multiplier: 0.454 },
  'inch': { unit: 'cm', multiplier: 2.54 },
  'inches': { unit: 'cm', multiplier: 2.54 },
};

const METRIC_TO_IMPERIAL: Record<string, { unit: MeasurementUnit; multiplier: number }> = {
  'ml': { unit: 'tbsp', multiplier: 0.0677 },
  'l': { unit: 'cup', multiplier: 4.227 },
  'g': { unit: 'oz', multiplier: 0.0353 },
  'kg': { unit: 'lb', multiplier: 2.205 },
  'cm': { unit: 'inch', multiplier: 0.394 },
};

export function convertMeasurement(
  amount: number,
  unit: MeasurementUnit,
  targetSystem: UnitSystem
): { amount: number; unit: MeasurementUnit } {
  // Don't convert unitless measurements
  if (['piece', 'pieces', 'clove', 'cloves', 'pinch', 'dash', 'whole'].includes(unit)) {
    return { amount, unit };
  }

  if (targetSystem === 'metric' && unit in IMPERIAL_TO_METRIC) {
    const conversion = IMPERIAL_TO_METRIC[unit];
    const convertedAmount = amount * conversion.multiplier;
    
    // Round appropriately based on the unit
    const roundedAmount = conversion.unit === 'ml' ? Math.round(convertedAmount) : 
                         conversion.unit === 'g' ? Math.round(convertedAmount) :
                         Math.round(convertedAmount * 100) / 100;
    
    return { amount: roundedAmount, unit: conversion.unit };
  }

  if (targetSystem === 'imperial' && unit in METRIC_TO_IMPERIAL) {
    const conversion = METRIC_TO_IMPERIAL[unit];
    const convertedAmount = amount * conversion.multiplier;
    
    // Round appropriately
    const roundedAmount = Math.round(convertedAmount * 100) / 100;
    
    return { amount: roundedAmount, unit: conversion.unit };
  }

  return { amount, unit };
}

export function formatAmount(amount: number): string {
  if (amount === Math.floor(amount)) {
    return amount.toString();
  }
  
  // Handle common fractions
  const remainder = amount - Math.floor(amount);
  if (Math.abs(remainder - 0.5) < 0.01) return `${Math.floor(amount)} 1/2`;
  if (Math.abs(remainder - 0.25) < 0.01) return `${Math.floor(amount)} 1/4`;
  if (Math.abs(remainder - 0.75) < 0.01) return `${Math.floor(amount)} 3/4`;
  if (Math.abs(remainder - 0.33) < 0.01) return `${Math.floor(amount)} 1/3`;
  if (Math.abs(remainder - 0.67) < 0.01) return `${Math.floor(amount)} 2/3`;
  
  return amount.toFixed(2).replace(/\.?0+$/, '');
}

export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9/5) + 32);
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return Math.round((fahrenheit - 32) * 5/9);
}