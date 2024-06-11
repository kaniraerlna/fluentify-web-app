/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.js", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"]
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}

