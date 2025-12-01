import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0f5',   // Lightest shade
          100: '#d1e1eb',  // Very light
          200: '#a3c3d7',  // Light
          300: '#75a5c3',  // Medium light
          400: '#4787af',  // Medium
          500: '#234C6A',  // Base color
          600: '#1c3d55',  // Medium dark
          700: '#152e40',  // Dark
          800: '#0e1f2a',  // Darker
          900: '#071015',  // Very dark
        },
      },
    },
  },
  plugins: [],
};
export default config;

