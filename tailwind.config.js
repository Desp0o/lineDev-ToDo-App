/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#252931",
        placeholder: "#5F6571"
      },
      boxShadow: {
        'taskShadow': '0 1px 8px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

