/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saarthi: {
          bg: '#fcfbf4',
          primary: '#1b4332',
          secondary: '#d8f3dc',
          accent: '#2d6a4f',
          card: '#ffffff',
          muted: '#94a3b8',
        }
      }
    },
  },
  plugins: [],
}
