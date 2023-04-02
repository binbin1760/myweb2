/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins:{preflight:false},
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}

