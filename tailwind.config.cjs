

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '**/*.cjs',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      transparent: 'transparent',
      
      'gray-900': "#121214",
      'gray-700': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': "#e1e1e6",

      'piscine': '#21BFAC',
      'piscine-500': '#41FFE8'
    }
  },
  plugins: [],
}
