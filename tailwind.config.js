/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: { sm: "640px", md: "768px", lg: "960px", xl: "1200px" },
    colors: {
      body: "#AFAFAE",
      white: "#fff",
      darkGray: "#3C3C3C",
      gray: "#888888",
      outline: "#3C3C3C",
      black: "#000",
      lightGray: "#CECECE",
      darkGreen: "#4D5D53",
      Green: "#4C7262",
    },
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        bgHero: "url('/hero/bg.jpg')",
        bgImage: "url('/practice/img.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
