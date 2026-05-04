/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00D289", // الأخضر المميز لنبيل
        "bg-main": "#000000",
        "bg-card": "#121212",
        border: "#222222",
        text: {
          white: "#FFFFFF",
          muted: "#A0A0A0",
        }
      },
    },
  },
  plugins: [],
};