/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodylife: {
          white: "#FFFFFF",
          base: "#F9FAFB",
          red: "#D32F2F",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [],
}