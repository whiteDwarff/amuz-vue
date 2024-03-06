/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'back': '#F2F4F8',
        violet : '#5146F0',
        blue: '#4F44F0',
        'sky-blue': '#E0EDFF',
        'light-grey': '#F5F6FA',
        'grey-7': '#7B7B7B',
      },
      screens: {
        xs: '0px'
      },
      fontSize: {
        xl: '22px'
      }
    },
  },
}
