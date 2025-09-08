/**
 * React hook for using color palettes in components
 * Note: This file is for documentation purposes and compatibility.
 * The main theming system is handled by ThemeContext and useThemeStyles.
 */

import { 
  blueSerenity, 
  summerSunset, 
  type ColorPalette
} from './colors';

export const useColorPalette = () => {
  return {
    blueSerenity,
    summerSunset,
  };
};

// Hook for getting specific color values
export const useColor = () => {
  const getColorFromPalette = (palette: ColorPalette, colorPath: string): string => {
    try {
      const keys = colorPath.split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = palette;
      for (const key of keys) {
        value = value[key];
      }
      return typeof value === 'string' ? value : '#000000';
    } catch {
      console.warn(`Color not found: ${colorPath}`);
      return '#000000';
    }
  };

  return {
    getColorFromPalette,
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
