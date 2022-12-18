/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   "primary-dark": "#000000",
    //   "secondary-dark": " #14213d",
    //   "orange:": "#ff9d00",
    //   "primary-light": "#ffffff",
    //   "secondary-light": "#e5e5e5",
    //   "dark-blue": "#023e8a",
    //   "light-blue": "#0077b6",
    //   "dark-gray": "#778da9",
    // },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
