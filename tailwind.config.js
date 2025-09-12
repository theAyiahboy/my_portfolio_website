/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // deep navy
        secondary: '#f1f5f9', // soft gray
        accent: '#38bdf8', // sky blue
        highlight: '#f59e42', // orange
        emerald: '#10b981', // emerald
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(30,41,59,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
