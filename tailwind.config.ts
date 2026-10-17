import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
      },
      colors: {
        'brand': {
          'indigo': '#3A2F7B',
          'purple': '#5F3DFF',
          'lavender': '#C6B8F5',
          'midnight': '#171039',
          'dark': '#21164D',
          'rich': '#35216F',
          'muted': '#9E8BE8',
          'pale': '#E8E0FF',
          'off-white': '#F5F1FF',
        },
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-md': ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-sm': ['1.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section-md': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #171039 0%, #3A2F7B 100%)',
        'gradient-section': 'linear-gradient(180deg, #21164D 0%, #35216F 100%)',
        'gradient-purple': 'linear-gradient(135deg, #5F3DFF 0%, #3A2F7B 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(95, 61, 255, 0.3)',
        'glow-lavender': '0 0 20px rgba(198, 184, 245, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;