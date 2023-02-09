/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      lg: "896px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0.614696px 13.5233px rgba(255, 255, 255, 0.25)",
      },

      backgroundImage: (theme) => ({
        "Earth-New": "url('/src/assets/Earth-New.gif')",
      }),
      fontFamily: {
        Lustria: ["Lustria", "serif"],
        Inria: ["Inria Serif", "serif"],
      },
    },
    clipPath: {
      myPolygon: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    },
  },
  plugins: [require("tailwind-clip-path"), require("tailwind-scrollbar")],
};
