/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        navColor: "#475467",
      },
      lineHeight: {
        72: "72px", // Custom line-height
      },
    },
  },
  plugins: [],
};
