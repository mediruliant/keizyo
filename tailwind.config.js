/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      fontFamily: {
        "lexend-deca": "lexend deca",
        "poppins-bold": "poppins bold",
      },
    },
  },
  plugins: [],
};
