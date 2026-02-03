/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B0F19',
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 32px rgba(79, 70, 229, 0.65)',
        'glow-cyan': '0 0 32px rgba(34, 211, 238, 0.65)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
}

