/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#FDCF57",
        expurple: {
          100: "#E0DFF4",
          200: "#F8F8FE",
          600: "#0E162D",
          700: "#5071C4",
          800: "#223870",
        },
        exwhite: {
          100: "#FFFFFF",
          200: "#EFEEEE",
          300: "#6C6C6C",
          // cec5c5
        },
        exgray: {
          100: "#CDCED2",
          200: "#8C8C8C", // "#6C7275",
          300: "#6C7275", //#696969",
          400: "#696969", //"#8C8C8C",
          500: "#343839", //"#323232",
          600: "#323232",
          700: "#242525", //"#343839",
          800: "#181919",
        },
      },
      fontSize: {
        xs: "12px",
        sm: "0.875rem", //14px
        base: "16px",
        lg: "1.125rem", //18px
        xl: "1.25rem", //20px
        "2xl": "1.5rem", //24px
        "3xl": "1.875rem", //30px
        "4xl": "2.25rem", //36px
        "5xl": "3rem", //48px
        "6xl": "4rem",
      },
      height: {
        screenheight: "calc(100vh - 48px)",
      },
      minHeight: {
        screenheight: "calc(100vh - 48px)",
      },
      maxHeight: {
        screenheight: "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
