import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:          '#f8f6f2',
          'bg-alt':    '#edf5ed',
          'bg-dark':   '#1c3d1d',
          green:       '#2d6b2e',
          'green-hover': '#235524',
          'green-light': '#4a8f4b',
          gold:        '#c28009',
          'gold-hover': '#9e6807',
          text:        '#1a2b1a',
          'text-light': '#f2efe9',
          muted:       '#5a6e5a',
          'muted-light': '#8fa98f',
          border:      '#cce0cc',
          'border-dark': '#2d5a2e',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 4px 6px -1px rgba(45,107,46,0.06), 0 10px 30px -5px rgba(0,0,0,0.08)',
        hover: '0 8px 12px -2px rgba(45,107,46,0.15), 0 20px 40px -8px rgba(0,0,0,0.15)',
        green: '0 0 0 2px rgba(45,107,46,0.3)',
        gold:  '0 4px 20px rgba(194,128,9,0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease forwards',
        'fade-up-1': 'fadeUp 0.5s ease 0.1s forwards',
        'fade-up-2': 'fadeUp 0.5s ease 0.2s forwards',
        'fade-up-3': 'fadeUp 0.5s ease 0.3s forwards',
        'fade-up-4': 'fadeUp 0.5s ease 0.4s forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
