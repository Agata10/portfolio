/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        or: '#FF5714',
        wh: '#F7F9F9',
        gr: '##8B8C89',
      },
      fontFamily: {
        main: ['Lato', 'sans-serif'],
        nav: ['Fira Code', 'monospace'],
        par: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
