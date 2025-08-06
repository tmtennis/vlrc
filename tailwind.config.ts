import type { Config } from 'tailwindcss'
import { colors } from './styles/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Portfolio color palette
        'chocolate-cosmos': colors.chocolateCosmos,
        'claret': colors.claret,
        'amaranth-purple': colors.amaranthPurple,
        'rose-red': colors.roseRed,
        'bright-pink-crayola': colors.brightPinkCrayola,
        'bright-pink-crayola-2': colors.brightPinkCrayola2,
        'salmon-pink': colors.salmonPink,
        'cherry-blossom-pink': colors.cherryBlossomPink,
        'pink': colors.pink,
        'lavender-blush': colors.lavenderBlush,
        
        // Semantic color assignments
        portfolio: {
          background: colors.background,
          text: colors.text,
          accent: colors.accent,
          secondary: colors.secondary,
          muted: colors.muted,
        },
        
        // Maintain Tailwind default functionality
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        'cerco': ['CercoDEMO', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'helvetica-neue-black': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['CercoDEMO', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['CercoDEMO', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'black': '900',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
