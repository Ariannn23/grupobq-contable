/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#dff1ff",
          200: "#b9e4fe",
          300: "#7bd0fe",
          400: "#34b8fc",
          500: "#0aa0ed",
          600: "#007fcb",
          700: "#006eb3",
          800: "#055687",
          900: "#0a4770",
          950: "#072d4a",
          DEFAULT: "#0aa0ed", // Color principal por defecto
        },
        secondary: {
          DEFAULT: "#072d4a", // El más oscuro para textos principales
          light: "#0a4770",
          dark: "#072d4a",
        },
      },
    },
  },
  plugins: [],
};
