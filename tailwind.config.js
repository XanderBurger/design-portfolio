/** @type {import('tailwindcss').Config} */
import {fontFamily} from "tailwindcss/defaultTheme"

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBMPlex: ["var(--font-ibm)", 'sans-serif']
      },
      colors : {
        'hot-pink': "#FF2CFA" 
      }
    },
  },
  plugins: [],
};
