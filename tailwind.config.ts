import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obs-bg': '#0a0a0f',
        'obs-bg-secondary': '#111118',
        'obs-card': '#16161f',
        'obs-card-hover': '#1c1c28',
        'obs-red': '#e63946',
        'obs-red-dim': 'rgba(230, 57, 70, 0.15)',
        'obs-blue': '#457b9d',
        'obs-blue-dim': 'rgba(69, 123, 157, 0.15)',
        'obs-text': '#f1faee',
        'obs-text-secondary': '#a8dadc',
        'obs-border': 'rgba(168, 218, 220, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'metric-xl': ['3.5rem', { lineHeight: '1', fontWeight: '800' }],
        'metric-lg': ['2.5rem', { lineHeight: '1', fontWeight: '700' }],
        'metric-md': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      animation: {
        'pulse-live': 'pulse-live 2s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'glow-red': 'glow-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-blue': 'glow-blue 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
