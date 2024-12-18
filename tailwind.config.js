/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        yellow: ["#E2B616"],
        dark: ["#0F0F0F"],
        itemdark: ["#1a1a1a"],
        itemdarker: ["#151515"],
      },
    },
  },
  plugins: [],
};
