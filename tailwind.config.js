/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060B16',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        emeraldAccent: {
          500: '#10B981',
          600: '#0D9488',
          700: '#0F766E',
        },
      },
      boxShadow: {
        executive: '0 10px 40px -15px rgba(15, 23, 42, 0.12)',
        'executive-dark': '0 10px 40px -15px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
