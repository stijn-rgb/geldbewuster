/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        brand: {
          50:  '#EAF3DE',
          100: '#C0DD97',
          500: '#1D9E75',
          700: '#0F6E56',
          900: '#085041',
        }
      }
    },
  },
  plugins: [],
}
