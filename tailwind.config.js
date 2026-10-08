/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        plaster: 'var(--plaster)',
        iris: 'var(--iris)',
        walnut: 'var(--walnut)',
        mist: 'var(--mist)'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
