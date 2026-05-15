/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff2d78',
        'neon-cyan': '#00f5ff',
        'neon-violet': '#a855f7',
        'neon-lime': '#b6ff00',
        'deep-dark': '#050508',
        'aura-glow': 'rgba(168, 85, 247, 0.4)',
      },
      fontFamily: {
        cyber: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
