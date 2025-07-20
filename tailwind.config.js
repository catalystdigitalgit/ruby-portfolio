/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        shrikhand: ['Shrikhand', 'cursive'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        feature: 'rgb(var(--color-feature) / <alpha-value>)',
        link: '#3B82F6',
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to bottom, #FFF9EC, #FBC8C6, #FFF9EC)',
        'app-gradient-dark':
          'linear-gradient(to bottom, #343434, #695E5D, #343434, #695E5D)',
        gradient: 'linear-gradient(to right, #FC605C, #E39491)',
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
