/**
 * Color Palettes for Website
 * 
 * This file contains the color palettes used throughout the website.
 * Each palette includes semantic naming for different use cases.
 * 
 * TO ADD A NEW THEME:
 * 1. Create a new palette object following the ColorPalette interface
 * 2. Add it to the themes object with a unique key
 * 3. Generate the SVG filter using an online tool or CSS filter generator
 * 4. Update the Tailwind CSS configuration if needed
 */

// Base palette interface for consistency
export interface ColorPalette {
  // Backgrounds (lightest to darkest)
  background: {
    lightest: string;
    lighter: string;
    light: string;
  };
  // Container colors
  container: {
    light: string;
    medium: string;
  };
  // Accent colors for titles and highlights
  accent: {
    medium: string;
    strong: string;
  };
  // Deep colors for strong emphasis (optional)
  deep?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

// Blue Serenity Palette
export const blueSerenity: ColorPalette = {
  background: {
    lightest: '#edf2fb',
    lighter: '#e2eafc', 
    light: '#d7e3fc',
  },
  container: {
    light: '#ccdbfd',
    medium: '#c1d3fe',
  },
  accent: {
    medium: '#b6ccfe',
    strong: '#abc4ff',
  },
} as const;

// Summer Sunset Palette
export const summerSunset: ColorPalette = {
  background: {
    lightest: '#ffe0e9',
    lighter: '#ffc2d4',
    light: '#ff9ebb',
  },
  container: {
    light: '#ff7aa2',
    medium: '#e05780',
  },
  accent: {
    medium: '#b9375e',
    strong: '#8a2846',
  },
  deep: {
    primary: '#8a2846',
    secondary: '#602437',
    tertiary: '#522e38',
  },
} as const;

// Theme configuration - Easy to add new themes here!
export const themes = {
  'blue-serenity': {
    name: 'Blue Serenity',
    palette: blueSerenity,
    cssPrefix: 'blue',
    svgFilter: 'brightness(0) saturate(100%) invert(76%) sepia(34%) saturate(457%) hue-rotate(198deg) brightness(101%) contrast(101%)',
  },
  'summer-sunset': {
    name: 'Summer Sunset', 
    palette: summerSunset,
    cssPrefix: 'sunset',
    svgFilter: 'brightness(0) saturate(100%) invert(16%) sepia(82%) saturate(1614%) hue-rotate(324deg) brightness(96%) contrast(89%)',
  },
  // Add new themes here in the future:
  // 'forest-green': {
  //   name: 'Forest Green',
  //   palette: forestGreen,
  //   cssPrefix: 'forest',
  //   svgFilter: 'brightness(0) saturate(100%) invert(25%) sepia(82%) saturate(1614%) hue-rotate(90deg) brightness(96%) contrast(89%)',
  // },
} as const;

export type ThemeName = keyof typeof themes;

// Helper functions for easy palette access
export const getTheme = (themeName: ThemeName) => themes[themeName];
export const getPalette = (themeName: ThemeName) => themes[themeName].palette;
export const getThemeNames = () => Object.keys(themes) as ThemeName[];

// Utility function to get CSS custom property format
export const toCSSVar = (colorValue: string): string => {
  return colorValue.replace('ff', ''); // Remove alpha channel if present
};

// Generate CSS variables for current theme
export const generateCSSVariables = (themeName: ThemeName) => {
  const palette = getPalette(themeName);
  const prefix = getTheme(themeName).cssPrefix;
  
  return {
    [`--${prefix}-bg-lightest`]: palette.background.lightest,
    [`--${prefix}-bg-lighter`]: palette.background.lighter,
    [`--${prefix}-bg-light`]: palette.background.light,
    [`--${prefix}-container-light`]: palette.container.light,
    [`--${prefix}-container-medium`]: palette.container.medium,
    [`--${prefix}-accent-medium`]: palette.accent.medium,
    [`--${prefix}-accent-strong`]: palette.accent.strong,
    ...(palette.deep && {
      [`--${prefix}-deep-primary`]: palette.deep.primary,
      [`--${prefix}-deep-secondary`]: palette.deep.secondary,
      [`--${prefix}-deep-tertiary`]: palette.deep.tertiary,
    }),
    // Theme variables for current active theme
    '--theme-bg': palette.background.lightest,
    '--theme-text': palette.accent.strong,
    '--theme-accent': palette.accent.medium,
  };
};
