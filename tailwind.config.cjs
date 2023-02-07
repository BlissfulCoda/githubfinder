/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0.614696px 13.5233px rgba(255, 255, 255, 0.25)",
      },

      backgroundImage: (theme) => ({
        "dark-image": "url('/src/assets/Earth-2.gif')",
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
