'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { themes, type ThemeName, generateCSSVariables } from '@/styles/colors';

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeName[];
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Function to get a random theme
  const getRandomTheme = (): ThemeName => {
    const availableThemes = Object.keys(themes) as ThemeName[];
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    return availableThemes[randomIndex];
  };

  // Start with a default theme to avoid hydration mismatch
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue-serenity');
  const [isClient, setIsClient] = useState(false);
  const availableThemes = Object.keys(themes) as ThemeName[];

  // Set random theme only after client-side hydration
  useEffect(() => {
    setIsClient(true);
    setCurrentTheme(getRandomTheme());
  }, []);

  // Apply CSS variables when theme changes
  useEffect(() => {
    const cssVars = generateCSSVariables(currentTheme);
    const root = document.documentElement;
    
    // Apply all CSS variables
    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Set data attribute for theme-specific styling
    root.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
  };

  const toggleTheme = () => {
    const currentIndex = availableThemes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setCurrentTheme(availableThemes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme, 
      availableThemes, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
