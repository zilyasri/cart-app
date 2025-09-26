/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/components/ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
}
