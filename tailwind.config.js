/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#F9D5E5',
          blue: '#D5EAF9',
          lavender: '#E5D5F9',
        },
        accent: {
          pink: '#F06292',
          blue: '#42A5F5',
          lavender: '#9575CD',
        },
        brand: {
          light: '#FDF6FA',
          dark: '#4A3050',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

