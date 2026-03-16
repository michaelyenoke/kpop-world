/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A14', // Deep Void
        accent: '#7B61FF',  // Plasma
        ghost: '#F0EFF4',   // Ghost
        graphite: '#18181B', // Graphite
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        drama: ['Instrument Serif', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '3rem',
      },
    },
  },
  plugins: [],
}
