# Portfolio Color Palette

This document serves as a reference for the color palette used in the VLRC portfolio website.

## Color Palette

### Primary Colors (Dark to Light)
- **Chocolate Cosmos**: `#590d22` - Deep burgundy for dark accents
- **Claret**: `#800f2f` - Rich wine red for emphasis
- **Amaranth Purple**: `#a4133c` - Bold magenta for highlights
- **Rose Red**: `#c9184a` - Vibrant rose for primary elements
- **Bright Pink Crayola**: `#ff4d6d` - Electric pink for key accents
- **Bright Pink Crayola 2**: `#ff758f` - Medium bright pink for secondary elements
- **Salmon Pink**: `#ff8fa3` - Soft coral pink for subtle accents
- **Cherry Blossom Pink**: `#ffb3c1` - Light pink for gentle highlights
- **Pink**: `#ffccd5` - Pale pink for backgrounds
- **Lavender Blush**: `#fff0f3` - Softest pink for main backgrounds

### Color Categories

#### Background Colors
- **Primary Background**: `#fff0f3` (Lavender Blush)
- **Secondary Background**: `#ffccd5` (Pink)
- **Card Backgrounds**: `#ffb3c1` (Cherry Blossom Pink)

#### Text Colors
- **Primary Text**: `#590d22` (Chocolate Cosmos)
- **Secondary Text**: `#800f2f` (Claret)
- **Accent Text**: `#a4133c` (Amaranth Purple)

#### Accent Colors
- **Primary Accent**: `#ff4d6d` (Bright Pink Crayola)
- **Secondary Accent**: `#c9184a` (Rose Red)
- **Hover States**: `#ff758f` (Bright Pink Crayola 2)

## CSS Implementation

### CSS Custom Properties
```css
:root {
  --chocolate-cosmos: #590d22;
  --claret: #800f2f;
  --amaranth-purple: #a4133c;
  --rose-red: #c9184a;
  --bright-pink-crayola: #ff4d6d;
  --bright-pink-crayola-2: #ff758f;
  --salmon-pink: #ff8fa3;
  --cherry-blossom-pink: #ffb3c1;
  --pink: #ffccd5;
  --lavender-blush: #fff0f3;
}
```

### Usage Examples
```css
/* Background */
background: var(--lavender-blush);

/* Text */
color: var(--chocolate-cosmos);

/* Accents */
border: 2px solid var(--bright-pink-crayola);
```

### React Inline Styles
```jsx
// Background
style={{ background: '#fff0f3' }}

// Text
style={{ color: '#590d22' }}

// Accent
style={{ borderColor: '#ff4d6d' }}
```

## Design Philosophy

This gradient color palette creates:
- **Rich, warm aesthetic** with deep burgundy to soft pink progression
- **Versatile range** from bold accents to subtle backgrounds
- **Sophisticated depth** with multiple tonal variations
- **Modern vibrant feel** perfect for creative portfolios
