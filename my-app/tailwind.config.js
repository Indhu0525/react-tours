/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require('flowbite/plugin')
],
  
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
 
}

