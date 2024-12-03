/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Assuming `$default-font-size` is 1rem (or replace it with your desired value)
        default: "1rem",
      },
      boxShadow: {
        "btn-default": "0 1rem 2rem rgba(0, 0, 0, 0.2)",
        "btn-active": "0 .5rem 1rem rgba(0, 0, 0, 0.2)",
      },
      colors: {
        // Define your colors (assuming $color-black = #000 and $color-white = #fff)
        black: "#000",
        white: "#fff",
      },
      spacing: {
        "4rem": "4rem",
        "1.5rem": "1.5rem",
      },
      borderRadius: {
        full: "10rem",
      },
      transitionProperty: {
        all: "all",
      },
      animation: {
        moveInLeft: "moveInLeft 1s ease-out",
        moveInRight: "moveInRight 1s ease-out",
      },
      keyframes: {
        moveInLeft: {
          "0%": { opacity: 0, transform: "translateX(-10rem)" },
          "80%": { transform: "translateX(1rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        moveInRight: {
          "0%": { opacity: 0, transform: "translateX(10rem)" },
          "80%": { transform: "translateX(-1rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
