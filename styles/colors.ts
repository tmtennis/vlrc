// Portfolio Color Palette
// Rich pink and burgundy gradient tones

export const colors = {
  // Primary color palette (dark to light)
  chocolateCosmos: '#590d22',      // Deep burgundy for dark accents
  claret: '#800f2f',               // Rich wine red for emphasis
  amaranthPurple: '#a4133c',       // Bold magenta for highlights
  roseRed: '#c9184a',              // Vibrant rose for primary elements
  brightPinkCrayola: '#ff4d6d',    // Electric pink for key accents
  brightPinkCrayola2: '#ff758f',   // Medium bright pink for secondary elements
  salmonPink: '#ff8fa3',           // Soft coral pink for subtle accents
  cherryBlossomPink: '#ffb3c1',    // Light pink for gentle highlights
  pink: '#ffccd5',                 // Pale pink for backgrounds
  lavenderBlush: '#fff0f3',        // Softest pink for main backgrounds

  // Color usage guide
  background: '#fff0f3',           // lavenderBlush
  text: '#590d22',                 // chocolateCosmos
  accent: '#ff4d6d',               // brightPinkCrayola
  secondary: '#c9184a',            // roseRed
  muted: '#ffccd5',                // pink
} as const;

// CSS custom properties
export const cssVariables = {
  '--chocolate-cosmos': '#590d22',
  '--claret': '#800f2f',
  '--amaranth-purple': '#a4133c',
  '--rose-red': '#c9184a',
  '--bright-pink-crayola': '#ff4d6d',
  '--bright-pink-crayola-2': '#ff758f',
  '--salmon-pink': '#ff8fa3',
  '--cherry-blossom-pink': '#ffb3c1',
  '--pink': '#ffccd5',
  '--lavender-blush': '#fff0f3',
} as const;

// Utility function to get CSS variable reference
export const getCSSVar = (colorName: keyof typeof cssVariables) => {
  return `var(${colorName})`;
};

export default colors;
