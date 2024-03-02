/** @type {import('tailwindcss').Config} */
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    vue(),
    VueRouter({
      /* options */
      exclude: ['**/components/**'],
      routesFolder: [
        {
          src: 'src/pages',
        },
      ]
    }),
  ],
}