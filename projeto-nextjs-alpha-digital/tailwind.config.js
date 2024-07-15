/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-100': '#080815',
        'blue-200': '#0E0F25',
        'blue-300': '#141534',
        'blue-400': '#1F2151',
        'blue-500': '#2F3279',
        'blue-600': '#2F34AB',
        'blue-700': '#4A5DCD',
        'blue-800': '#7D8DEC',
        'blue-900': '#B2B8DE',
        'white': '#F1F2F6',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'plex': ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'heading': ['32px', '48px'],
        'button': ['16px', '20px'],
        'body': ['16px', '20px'],
        'label': ['12px', '16px'],
        'span': ['16px', '20px'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
