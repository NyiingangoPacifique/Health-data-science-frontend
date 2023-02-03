/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
      fontFamily: {
        'sans': ["Roc Grotesk",'Sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'roc':["Roc Grotesk",'Sans-serif'],
      }
     },
   },
   plugins: [],
 }