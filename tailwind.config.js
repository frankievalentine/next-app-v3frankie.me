/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  // keyframes: {
  //   wobble: {
  //     from: {
  //       transform: "translate3d(0, 0, 0)",
  //     },

  //     "15%": {
  //       transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
  //     },

  //     "30%": {
  //       transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
  //     },

  //     "45%": {
  //       transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
  //     },

  //     "60%": {
  //       transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
  //     },

  //     "75%": {
  //       transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
  //     },

  //     to: {
  //       transform: "translate3d(0, 0, 0)",
  //     },
  //   },
  // },
  // animation: {
  //   wobble: "wobble 1s infinite",
  // },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
