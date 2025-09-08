# Theme System Documentation

This project features a dynamic theme system that allows for easy switching between color palettes and simple addition of new themes.

## How It Works

The theme system consists of:
- **Color Palettes**: Structured color definitions in `src/styles/colors.ts`
- **Theme Context**: React context for managing theme state
- **Theme Hooks**: Utilities for accessing theme colors and styles
- **Dynamic CSS**: CSS variables that update automatically

## Current Themes

### Blue Serenity
- Light, calming blue palette
- Perfect for professional, serene interfaces
- Colors: Alice Blue, Lavender Web, Periwinkle, Jordy Blue

### Summer Sunset
- Warm pink/red palette
- Great for vibrant, energetic designs
- Colors: Mimi Pink, Orchid Pink, Amaranth Pink, Rose Red, Claret

### Bright Green
- Vibrant, energetic green palette
- Perfect for eco-friendly, growth-focused designs
- Colors: Spring Bud, Lime, Cal Poly Green, Office Green, Kelly Green, SGBus Green

### Muted Earthy
- Soft, warm earthy tones
- Ideal for cozy, organic, approachable designs
- Colors: Apricot, Melon, Salmon Pink, Old Rose, Dim Gray

### Red Sunburst
- Bold, fiery red-orange palette
- Great for dramatic, high-energy interfaces
- Colors: Sandy Brown, Coral, Chocolate Cosmos, Claret, Amaranth

### Pastel Dream
- Soft, dreamy pastel colors
- Perfect for creative, playful, welcoming designs
- Colors: Thistle, Uranian Blue, Light Sky Blue, Fairy Tale, Carnation Pink

### Golden Twilight
- Dark, elegant theme with golden accents
- Perfect for sophisticated, premium, luxury designs
- Colors: Rich Black, Oxford Blue, Yale Blue, Mikado Yellow, Gold

### Rustic Charm
- Warm, natural earthy tones
- Ideal for cozy, artisanal, handcrafted aesthetics
- Colors: Floral White, Timberwolf, Black Olive, Eerie Black, Flame

### Peachy Delight
- Soft, warm peachy-pink palette
- Perfect for gentle, feminine, nurturing designs
- Colors: Platinum, Champagne Pink, Pink, Cherry Blossom Pink, Mountbatten Pink

### Minimalist
- Clean, simple grayscale with coral accent
- Great for modern, professional, no-nonsense interfaces
- Colors: White, Silver, Gunmetal, Coral, Paynes Gray

### Summer Melody
- Harmonious blend of warm and cool tones
- Ideal for balanced, cheerful, approachable designs
- Colors: Linen, Tea Rose Red, Cambridge Blue, Light Coral, Hunyadi Yellow

## Adding a New Theme

### Step 1: Create the Color Palette

Add a new palette object in `src/styles/colors.ts`:

```typescript
// Forest Green Palette (example)
export const forestGreen: ColorPalette = {
  background: {
    lightest: '#f0f9f0',
    lighter: '#e6f7e6', 
    light: '#d0f0d0',
  },
  container: {
    light: '#b8e6b8',
    medium: '#90d090',
  },
  accent: {
    medium: '#5cb85c',
    strong: '#449d44',
  },
  deep: {
    primary: '#357a35',
    secondary: '#2e6b2e',
    tertiary: '#1f4d1f',
  },
} as const;
```

### Step 2: Add to Themes Configuration

Add your theme to the `themes` object:

```typescript
export const themes = {
  'blue-serenity': { /* existing */ },
  'summer-sunset': { /* existing */ },
  'forest-green': {
    name: 'Forest Green',
    palette: forestGreen,
    cssPrefix: 'forest',
    svgFilter: 'brightness(0) saturate(100%) invert(25%) sepia(82%) saturate(1614%) hue-rotate(90deg) brightness(96%) contrast(89%)',
  },
} as const;
```

### Step 3: Generate SVG Filter

Use an online CSS filter generator (like [CSS Filter Generator](https://codepen.io/sosuke/pen/Pjoqqp)) to create the SVG filter that matches your accent color.

### Step 4: Update Tailwind CSS (Optional)

If you want Tailwind utility classes, add them to `src/app/globals.css`:

```css
/* Forest Green Colors */
--color-forest-bg-lightest: #f0f9f0;
--color-forest-bg-lighter: #e6f7e6;
--color-forest-bg-light: #d0f0d0;
--color-forest-container-light: #b8e6b8;
--color-forest-container-medium: #90d090;
--color-forest-accent-medium: #5cb85c;
--color-forest-accent-strong: #449d44;
--color-forest-deep-primary: #357a35;
--color-forest-deep-secondary: #2e6b2e;
--color-forest-deep-tertiary: #1f4d1f;
```

## Using the Theme System

### In Components

```typescript
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeStyles } from '@/hooks/useThemeStyles';

function MyComponent() {
  const { currentTheme, toggleTheme } = useTheme();
  const { styles, svgFilter } = useThemeStyles();

  return (
    <div style={{ backgroundColor: styles.background }}>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}
```

### Theme Switching

The "Palettes" menu item automatically cycles through all available themes. To switch to a specific theme:

```typescript
const { setTheme } = useTheme();
setTheme('forest-green'); // Switch to specific theme
```

## File Structure

```
src/
├── styles/
│   └── colors.ts           # Color palettes and theme definitions
├── contexts/
│   └── ThemeContext.tsx    # Theme state management
├── hooks/
│   └── useThemeStyles.ts   # Theme utilities
└── app/
    ├── globals.css         # CSS variables and Tailwind config
    └── layout.tsx         # ThemeProvider wrapper
```

## Features

- **Automatic Color Matching**: SVG icons automatically change color to match the theme
- **Smooth Transitions**: All color changes are animated with CSS transitions
- **Type Safety**: Full TypeScript support with proper typing
- **Extensible**: Easy to add unlimited new themes
- **Performance**: Uses CSS variables for efficient updates
- **Persistent**: Theme state is maintained across component re-renders

## Color Palette Interface

Each palette must follow this structure:

```typescript
interface ColorPalette {
  background: {
    lightest: string;  // Page background
    lighter: string;   // Section backgrounds
    light: string;     // Card backgrounds
  };
  container: {
    light: string;     // Light containers
    medium: string;    // Medium containers
  };
  accent: {
    medium: string;    // Secondary accents
    strong: string;    // Primary accents (text, icons)
  };
  deep?: {             // Optional darker colors
    primary: string;   // Strong emphasis
    secondary: string; // Supporting elements
    tertiary: string;  // Subtle details
  };
}
```

This structure ensures consistency across all themes and makes it easy to map colors to specific use cases.
