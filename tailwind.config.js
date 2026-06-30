/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0a" },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.045em' },
      backgroundImage: {
        'aura': 'linear-gradient(120deg, #0a0a0a 0%, #0e2a2e 35%, #1b3a52 60%, #2b2150 100%)',
        'aura-accent': 'linear-gradient(120deg, #34d0c4 0%, #6a7bf0 50%, #a06ae0 100%)',
      },
    },
  },
  plugins: [],
};
