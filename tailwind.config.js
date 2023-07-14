/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        success: "#5AAC44",
        primary: colors.indigo,
      },
      container: {
        screens: {
          sm: '640px',
          dm: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1280px',
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
