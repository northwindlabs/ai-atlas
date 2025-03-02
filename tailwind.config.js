/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      colors: {
        'eu-blue': '#003399',
        'eu-yellow': '#FFCC00',
        'atlas-teal': '#00A8A8',
        'atlas-purple': '#6A4C93',
        'atlas-orange': '#FF7F50',
        'atlas-gold': '#FFD166',
        'atlas-green': '#4CAF50',
        'atlas-purple-light': '#9C27B0',
      },
    },
  },
  plugins: [],
} 