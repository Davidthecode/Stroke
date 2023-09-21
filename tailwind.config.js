/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        extraSmall: {
          min: "0px",
          max: "300px"
        },
        smallSize: {
          min: "0px",
          max: "550px"
        },
        mediumScreens: {
          min: "550px",
          max: "1116px"
        },
        largeTablet: {
          min: "0px",
          max: "1289px"
        }
      }
    },
  },
  plugins: [],
}

