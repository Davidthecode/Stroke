/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens : {
        largeTablet: {
          min: "0px",
          max: "1289px"
        }
      }
    },
  },
  plugins: [],
}

