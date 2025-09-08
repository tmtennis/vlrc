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

// Bright Green Palette
export const brightGreen: ColorPalette = {
  background: {
    lightest: '#9ef01a', // spring-bud
    lighter: '#ccff33',  // lime
    light: '#70e000',    // sgbus-green (as lighter background option)
  },
  container: {
    light: '#38b000',    // kelly-green
    medium: '#008000',   // office-green-3
  },
  accent: {
    medium: '#007200',   // office-green-2
    strong: '#004b23',   // cal-poly-green
  },
  deep: {
    primary: '#004b23',  // cal-poly-green
    secondary: '#006400', // office-green
    tertiary: '#007200',  // office-green-2
  },
} as const;

// Muted Earthy Tones Palette
export const mutedEarthy: ColorPalette = {
  background: {
    lightest: '#ffcdb2', // apricot
    lighter: '#ffb4a2',  // melon
    light: '#e5989b',    // salmon-pink (as light background)
  },
  container: {
    light: '#e5989b',    // salmon-pink
    medium: '#b5838d',   // old-rose
  },
  accent: {
    medium: '#b5838d',   // old-rose
    strong: '#6d6875',   // dim-gray
  },
  deep: {
    primary: '#6d6875',  // dim-gray
    secondary: '#b5838d', // old-rose
    tertiary: '#e5989b',  // salmon-pink
  },
} as const;

// Red Sunburst Palette
export const redSunburst: ColorPalette = {
  background: {
    lightest: '#ff9b54', // sandy-brown
    lighter: '#ff7f51',  // coral
    light: '#ce4257',    // amaranth (as light background)
  },
  container: {
    light: '#ce4257',    // amaranth
    medium: '#720026',   // claret
  },
  accent: {
    medium: '#720026',   // claret
    strong: '#4f000b',   // chocolate-cosmos
  },
  deep: {
    primary: '#4f000b',  // chocolate-cosmos
    secondary: '#720026', // claret
    tertiary: '#ce4257',  // amaranth
  },
} as const;

// Pastel Dream Palette
export const pastelDream: ColorPalette = {
  background: {
    lightest: '#cdb4db', // thistle
    lighter: '#bde0fe',  // uranian-blue
    light: '#a2d2ff',    // light-sky-blue
  },
  container: {
    light: '#ffc8dd',    // fairy-tale
    medium: '#ffafcc',   // carnation-pink
  },
  accent: {
    medium: '#ffafcc',   // carnation-pink
    strong: '#ffc8dd',   // fairy-tale
  },
} as const;

// Rustic Charm Palette
export const rusticCharm: ColorPalette = {
  background: {
    lightest: '#fffcf2', // floral-white
    lighter: '#ccc5b9',  // timberwolf
    light: '#eb5e28',    // flame (as light background)
  },
  container: {
    light: '#403d39',    // black-olive
    medium: '#252422',   // eerie-black
  },
  accent: {
    medium: '#eb5e28',   // flame
    strong: '#252422',   // eerie-black
  },
  deep: {
    primary: '#252422',  // eerie-black
    secondary: '#403d39', // black-olive
    tertiary: '#eb5e28',  // flame
  },
} as const;

// Summer Melody Palette
export const summerMelody: ColorPalette = {
  background: {
    lightest: '#f7ede2', // linen
    lighter: '#f5cac3',  // tea-rose-red
    light: '#f6bd60',    // hunyadi-yellow (as light background)
  },
  container: {
    light: '#84a59d',    // cambridge-blue
    medium: '#f28482',   // light-coral
  },
  accent: {
    medium: '#f6bd60',   // hunyadi-yellow
    strong: '#84a59d',   // cambridge-blue
  },
  deep: {
    primary: '#84a59d',  // cambridge-blue
    secondary: '#f28482', // light-coral
    tertiary: '#f6bd60',  // hunyadi-yellow
  },
} as const;

// Nightfall Palette
export const nightfall: ColorPalette = {
  background: {
    lightest: '#10002b', // russian-violet
    lighter: '#240046',  // russian-violet-2
    light: '#3c096c',    // persian-indigo
  },
  container: {
    light: '#5a189a',    // tekhelet
    medium: '#7b2cbf',   // french-violet
  },
  accent: {
    medium: '#9d4edd',   // amethyst
    strong: '#c77dff',   // heliotrope
  },
  deep: {
    primary: '#e0aaff',  // mauve
    secondary: '#c77dff', // heliotrope
    tertiary: '#9d4edd',  // amethyst
  },
} as const;

// Pastel Palette
export const pastel: ColorPalette = {
  background: {
    lightest: '#eff7f6', // mint-cream
    lighter: '#b2f7ef',  // celeste
    light: '#7bdff2',    // non-photo-blue
  },
  container: {
    light: '#f7d6e0',    // mimi-pink
    medium: '#f2b5d4',   // lavender-pink
  },
  accent: {
    medium: '#f2b5d4',   // lavender-pink
    strong: '#7bdff2',   // non-photo-blue
  },
  deep: {
    primary: '#f7d6e0',  // mimi-pink
    secondary: '#f2b5d4', // lavender-pink
    tertiary: '#7bdff2',  // non-photo-blue
  },
} as const;

// Autumn Harvest Palette
export const autumnHarvest: ColorPalette = {
  background: {
    lightest: '#ede0d4', // almond
    lighter: '#e6ccb2',  // dun
    light: '#ddb892',    // tan
  },
  container: {
    light: '#b08968',    // chamoisee
    medium: '#9c6644',   // raw-umber
  },
  accent: {
    medium: '#9c6644',   // raw-umber
    strong: '#7f5539',   // coffee
  },
  deep: {
    primary: '#7f5539',  // coffee
    secondary: '#9c6644', // raw-umber
    tertiary: '#b08968',  // chamoisee
  },
} as const;

// Crimson Hues Palette
export const crimsonHues: ColorPalette = {
  background: {
    lightest: '#250902', // black-bean
    lighter: '#38040e',  // black-bean-2
    light: '#640d14',    // rosewood
  },
  container: {
    light: '#800e13',    // falu-red
    medium: '#ad2831',   // auburn
  },
  accent: {
    medium: '#ad2831',   // auburn
    strong: '#800e13',   // falu-red
  },
  deep: {
    primary: '#ad2831',  // auburn
    secondary: '#800e13', // falu-red
    tertiary: '#640d14',  // rosewood
  },
} as const;

// October Palette
export const october: ColorPalette = {
  background: {
    lightest: '#233d4d', // charcoal
    lighter: '#619b8a',  // zomp
    light: '#a1c181',    // olivine
  },
  container: {
    light: '#fcca46',    // sunglow
    medium: '#fe7f2d',   // pumpkin
  },
  accent: {
    medium: '#fe7f2d',   // pumpkin
    strong: '#fcca46',   // sunglow
  },
  deep: {
    primary: '#fe7f2d',  // pumpkin
    secondary: '#fcca46', // sunglow
    tertiary: '#a1c181',  // olivine
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
    svgFilter: 'brightness(0) saturate(100%) invert(16%) sepia(82%) saturate(800%) hue-rotate(324deg) brightness(96%) contrast(89%)',
  },
  'bright-green': {
    name: 'Bright Green',
    palette: brightGreen,
    cssPrefix: 'green',
    svgFilter: 'brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(800%) hue-rotate(130deg) brightness(95%) contrast(106%)',
  },
  'muted-earthy': {
    name: 'Muted Earthy',
    palette: mutedEarthy,
    cssPrefix: 'earthy',
    svgFilter: 'brightness(0) saturate(100%) invert(42%) sepia(10%) saturate(600%) hue-rotate(314deg) brightness(91%) contrast(88%)',
  },
  'red-sunburst': {
    name: 'Red Sunburst',
    palette: redSunburst,
    cssPrefix: 'red',
    svgFilter: 'brightness(0) saturate(100%) invert(3%) sepia(100%) saturate(800%) hue-rotate(316deg) brightness(97%) contrast(106%)',
  },
  'pastel-dream': {
    name: 'Pastel Dream',
    palette: pastelDream,
    cssPrefix: 'pastel',
    svgFilter: 'brightness(0) saturate(100%) invert(91%) sepia(18%) saturate(600%) hue-rotate(314deg) brightness(104%) contrast(96%)',
  },
  'rustic-charm': {
    name: 'Rustic Charm',
    palette: rusticCharm,
    cssPrefix: 'rustic',
    svgFilter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(800%) hue-rotate(20deg) brightness(85%) contrast(85%)',
  },
  'summer-melody': {
    name: 'Summer Melody',
    palette: summerMelody,
    cssPrefix: 'melody',
    svgFilter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(700%) hue-rotate(30deg) brightness(95%) contrast(95%)',
  },
  'nightfall': {
    name: 'Nightfall',
    palette: nightfall,
    cssPrefix: 'nightfall',
    svgFilter: 'brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(800%) hue-rotate(260deg) brightness(90%) contrast(110%)',
  },
  'pastel': {
    name: 'Pastel',
    palette: pastel,
    cssPrefix: 'pastel-new',
    svgFilter: 'brightness(0) saturate(100%) invert(85%) sepia(15%) saturate(500%) hue-rotate(180deg) brightness(105%) contrast(95%)',
  },
  'autumn-harvest': {
    name: 'Autumn Harvest',
    palette: autumnHarvest,
    cssPrefix: 'autumn',
    svgFilter: 'brightness(0) saturate(100%) invert(35%) sepia(20%) saturate(600%) hue-rotate(25deg) brightness(85%) contrast(95%)',
  },
  'crimson-hues': {
    name: 'Crimson Hues',
    palette: crimsonHues,
    cssPrefix: 'crimson',
    svgFilter: 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(800%) hue-rotate(350deg) brightness(80%) contrast(120%)',
  },
  'october': {
    name: 'October',
    palette: october,
    cssPrefix: 'october',
    svgFilter: 'brightness(0) saturate(100%) invert(65%) sepia(50%) saturate(600%) hue-rotate(15deg) brightness(95%) contrast(105%)',
  },
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
