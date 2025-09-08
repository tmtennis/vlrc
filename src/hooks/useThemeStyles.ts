'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { getTheme, getPalette } from '@/styles/colors';

export function useThemeStyles() {
  const { currentTheme } = useTheme();
  const theme = getTheme(currentTheme);
  const palette = getPalette(currentTheme);
  
  return {
    // Current theme info
    themeName: currentTheme,
    palette,
    
    // CSS classes for Tailwind
    backgroundClass: `bg-${theme.cssPrefix}-bg-lightest`,
    textClass: `text-${theme.cssPrefix}-accent-strong`,
    containerClass: `bg-${theme.cssPrefix}-container-light`,
    
    // SVG filter for matching icon colors
    svgFilter: theme.svgFilter,
    
    // Inline styles for direct use
    styles: {
      background: palette.background.lightest,
      text: palette.accent.strong,
      accent: palette.accent.medium,
    },
    
    // CSS variables (for custom styling)
    cssVariables: {
      '--current-bg': palette.background.lightest,
      '--current-text': palette.accent.strong,
      '--current-accent': palette.accent.medium,
    } as React.CSSProperties,
  };
}
