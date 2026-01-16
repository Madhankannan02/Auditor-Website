/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#3333ff',
          900: '#0000ff',
        }
      }
    },
  },
  plugins: [],
}

