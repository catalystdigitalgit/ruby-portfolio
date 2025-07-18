/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        feature: {
          light: '#FC605C',
          dark: '#E39491',
        },
        secondary: {
          light: '#fcfcfc',
          dark: '#343434',
        },
        gradient: {
          from: {
            light: '#FC605C',
            dark: '#E39491',
          },
          to: {
            light: '#E39491',
            dark: '#695E5D',
          },
        },
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to bottom, #FFF9EC, #FBC8C6)',
        'app-gradient-dark': 'linear-gradient(to bottom, #343434, #695E5D)',
        'gradient': 'linear-gradient(to right, #FC605C, #E39491)',
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
