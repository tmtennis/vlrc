/**
 * React hook for using color palettes in components
 */

import { useEffect } from 'react';
import { 
  blueSerenity, 
  summerSunset, 
  colors, 
  applyCSSVariables,
  type BlueSerenityColor,
  type SummerSunsetColor 
} from './colors';

export const useColorPalette = () => {
  useEffect(() => {
    applyCSSVariables();
  }, []);

  return {
    blueSerenity,
    summerSunset,
    colors,
  };
};

// Hook for getting specific color values
export const useColor = () => {
  const getBlueSerenityColor = (colorName: BlueSerenityColor): string => {
    return blueSerenity[colorName];
  };

  const getSummerSunsetColor = (colorName: SummerSunsetColor): string => {
    return summerSunset[colorName];
  };

  const getSemanticColor = (palette: 'blue' | 'sunset', category: string, shade: string): string => {
    try {
      // @ts-ignore - Dynamic access for semantic colors
      return colors[palette][category][shade];
    } catch {
      console.warn(`Color not found: ${palette}.${category}.${shade}`);
      return '#000000';
    }
  };

  return {
    getBlueSerenityColor,
    getSummerSunsetColor,
    getSemanticColor,
    blueSerenity,
    summerSunset,
    colors,
  };
};

// Utility functions for common color operations
export const colorUtils = {
  // Convert hex to RGB
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  // Add alpha to hex color
  addAlpha: (hex: string, alpha: number): string => {
    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
    return hex.replace(/ff$/, '') + alphaHex;
  },

  // Get contrasting text color (black or white)
  getContrastColor: (hex: string): string => {
    const rgb = colorUtils.hexToRgb(hex);
    if (!rgb) return '#000000';
    
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
  },
};
