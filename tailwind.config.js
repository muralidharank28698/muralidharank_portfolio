/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        "bounce-on-hover": "bounce 1.5s infinite",
      },
      fontFamily: {
        // sans: ["Manrope", "sans-serif"], // make Manrope the default sans
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
