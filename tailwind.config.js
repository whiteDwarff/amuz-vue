/** @type {import('tailwindcss').Config} */
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

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

        // grey: '#CECECE',
        // 'grey-f4': '#F4F5F6',
        // 'grey-8d': '#8D8D8D'
      },
      screens: {
        xs: '500px'
      },
      fontSize: {
        xl: '22px'
      }
    
    },
  },
  plugins: [
    vue(),
    VueRouter({
      exclude: ['**/components/**'],
      routesFolder: [
        {
          src: 'src/pages',
        },
      ]
    }),
  ],
}