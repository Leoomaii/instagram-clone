/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}", "./atoms/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
