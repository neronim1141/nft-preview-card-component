/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          soft_blue: "hsl(215, 51%, 70%)",
          cyan: "hsl(178, 100%, 50%)",
        },
        neutral: {
          main_bg: "hsl(217, 54%, 11%)",
          card_bg: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
