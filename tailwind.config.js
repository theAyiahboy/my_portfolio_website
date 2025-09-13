/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // navy
        secondary: '#f8fafc', // light gray
        accent: '#2563eb', // blue
        highlight: '#64748b', // slate
        muted: '#e2e8f0', // muted gray
        info: '#38bdf8', // sky blue
        success: '#10b981', // emerald
        warning: '#fbbf24', // amber
        error: '#ef4444', // red (only for errors)
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
