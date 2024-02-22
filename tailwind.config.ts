import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    colors: {
      blue: {
        20: '#cce5f4',
        40: '#99cbe8',
        60: '#66b2dd',
        80: '#3398d1',
        100: '#007ec6',
        DEFAULT: '#007ec6',
      },
      neutral: {
        20: '#d8d8d8',
        40: '#b1b1b1',
        60: '#8a8a8a',
        80: '#636363',
        90: '#3c3c3c',
        DEFAULT: '#3c3c3c',
      },
      red: {
        20: '#fbdce2',
        40: '#f7b9c5',
        60: '#f396a8',
        80: '#ef738b',
        100: '#eb506e',
        DEFAULT: '#eb506e',
      },
      orange: {
        20: '#fdeee4',
        40: '#fbddc9',
        60: '#f9ccae',
        80: '#f7bb93',
        100: '#f5aa78',
        DEFAULT: '#f5aa78',
      },
      white: {
        DEFAULT: '#fff',
      },
      yellow: {
        20: '#fffbde',
        40: '#fff7bd',
        60: '#fff39c',
        80: '#ffef7b',
        100: '#ffeb5a',
        DEFAULT: '#ffeb5a',
      },
      green: {
        20: '#e4f2ea',
        40: '#c9e5d5',
        60: '#aed8c0',
        80: '#93cbab',
        100: '#78be96',
        DEFAULT: '#78be96',
      },
      turquoise: {
        20: '#ceeeea',
        40: '#9dddd5',
        60: '#6cccc0',
        80: '#3bbbab',
        100: '#0aaa96',
        DEFAULT: '#0aaa96',
      },
      lightblue: {
        20: '#eaeff8',
        40: '#d5dff1',
        60: '#c0cfea',
        80: '#abbfe3',
        100: '#96afdc',
        DEFAULT: '#96afdc',
      },
      darkblue: {
        20: '#d4dee8',
        40: '#a9bdd1',
        60: '#7e9cba',
        80: '#537ba3',
        100: '#285a8c',
        DEFAULT: '#285a8c',
      },
    },
    fontFamily: {
      sans: ['Avenir LT Std', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Cascadia Mono', 'Courier', 'mono'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
