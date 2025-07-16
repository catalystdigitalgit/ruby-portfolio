/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FBC8C6',
          dark: '#FBC8C6',
        },
        secondary: {
          light: '#fcfcfc',
          dark: '#343434',
        },
        accent: {
          light: '#6366f1',
          dark: '#8b5cf6',
        },
        'accent-light': {
          light: '#a5b4fc',
          dark: '#c4b5fd',
        },
        'accent-dark': {
          light: '#4f46e5',
          dark: '#7c3aed',
        },
        success: {
          light: '#10b981',
          dark: '#059669',
        },
        warning: {
          light: '#f59e0b',
          dark: '#d97706',
        },
        danger: {
          light: '#ef4444',
          dark: '#dc2626',
        },
        text: {
          primary: {
            light: '#1e293b',
            dark: '#f8fafc',
          },
          secondary: {
            light: '#64748b',
            dark: '#cbd5e1',
          },
          muted: {
            light: '#94a3b8',
            dark: '#94a3b8',
          },
        },
        surface: {
          primary: {
            light: '#ffffff',
            dark: '#0f172a',
          },
          secondary: {
            light: '#f8fafc',
            dark: '#1e293b',
          },
          elevated: {
            light: '#f1f5f9',
            dark: '#334155',
          },
        },
        gradient: {
          from: {
            light: '#6366f1',
            dark: '#8b5cf6',
          },
          via: {
            light: '#8b5cf6',
            dark: '#a855f7',
          },
          to: {
            light: '#ec4899',
            dark: '#f472b6',
          },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out',
        'wave-hover': 'wave-hover 2s ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%, 75%': { transform: 'rotate(10deg)' },
        },
        'wave-hover': {
          '0%, 60%, 100%': { transform: 'rotate(0deg)' },
          '15%, 45%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
};
