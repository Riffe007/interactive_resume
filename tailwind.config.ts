import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enables dark mode via a class on the root element
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Ensure Tailwind scans component files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Custom primary color
        secondary: "#22C55E", // Custom secondary color
        darkBg: "#0A0A0A", // Dark mode background
        lightBg: "#F3F4F6", // Light mode background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, clean font
        mono: ['Source Code Pro', 'monospace'],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
