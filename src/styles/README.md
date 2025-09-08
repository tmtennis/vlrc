# Color System Documentation

This document explains how to use the color palettes implemented in this Next.js project.

## Color Palettes

### Blue Serenity
A calming blue palette perfect for backgrounds and subtle accents:
- **Backgrounds**: Alice Blue, Lavender Web, Lavender Web 2
- **Containers**: Periwinkle, Periwinkle 2
- **Accents**: Periwinkle 3, Jordy Blue

### Summer Sunset
A warm pink/red palette ideal for highlights and call-to-actions:
- **Backgrounds**: Mimi Pink, Orchid Pink
- **Containers**: Amaranth Pink, Rose Pompadour
- **Accents**: Blush, Rose Red
- **Deep Tones**: Claret, Wine, Eggplant

## Usage Methods

### 1. Tailwind CSS Classes
Use the predefined Tailwind classes in your components:

```tsx
<div className="bg-blue-lightest text-sunset-accent-strong">
  Content with Blue Serenity background and Summer Sunset text
</div>
```

**Available Tailwind Classes:**
- `bg-blue-lightest`, `bg-blue-lighter`, `bg-blue-light`
- `bg-blue-container-light`, `bg-blue-container-medium`
- `bg-blue-accent-medium`, `bg-blue-accent-strong`
- `bg-sunset-bg-light`, `bg-sunset-bg-medium`
- `bg-sunset-container-medium`, `bg-sunset-container-strong`
- `bg-sunset-accent-medium`, `bg-sunset-accent-strong`
- `bg-sunset-deep-primary`, `bg-sunset-deep-secondary`, `bg-sunset-deep-tertiary`

### 2. TypeScript Hook
Use the `useColor` hook for dynamic color access:

```tsx
'use client';
import { useColor } from '@/styles/useColors';

export default function MyComponent() {
  const { blueSerenity, summerSunset, getSemanticColor } = useColor();

  return (
    <div style={{ backgroundColor: blueSerenity.aliceBlue }}>
      <button style={{ backgroundColor: getSemanticColor('sunset', 'accent', 'strong') }}>
        Click me
      </button>
    </div>
  );
}
```

### 3. Direct Import
Import colors directly for use in styles:

```tsx
import { blueSerenity, summerSunset } from '@/styles/colors';

const MyComponent = () => (
  <div style={{ backgroundColor: blueSerenity.jordyBlue }}>
    Content
  </div>
);
```

### 4. CSS Custom Properties
Use the CSS variables directly in your stylesheets:

```css
.my-class {
  background-color: var(--alice-blue);
  color: var(--claret);
}
```

## File Structure

```
src/
├── styles/
│   ├── colors.ts          # Color definitions and utilities
│   └── useColors.ts       # React hooks for color usage
├── components/
│   └── ColorPaletteDemo.tsx  # Example component
└── app/
    ├── globals.css        # Tailwind configuration with colors
    └── page.tsx          # Main page using the color system
```

## Color Utilities

The `colorUtils` object provides helpful functions:

```tsx
import { colorUtils } from '@/styles/useColors';

// Convert hex to RGB
const rgb = colorUtils.hexToRgb('#abc4ff');

// Add alpha to color
const transparent = colorUtils.addAlpha('#abc4ff', 0.5);

// Get contrasting text color
const textColor = colorUtils.getContrastColor('#abc4ff');
```

## Best Practices

1. **Semantic Usage**: Use colors according to their intended purpose (backgrounds, containers, accents)
2. **Consistency**: Stick to one palette per section for visual harmony
3. **Accessibility**: Always check contrast ratios, especially for text
4. **Performance**: Use Tailwind classes when possible for better optimization

## Examples

Check out the `ColorPaletteDemo` component to see all colors in action and understand their visual relationships.
