/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'calc-body': '#2C3E50',
        'calc-dark': '#34495E',
        'calc-accent': '#3498DB',
        'calc-surface': '#ECF0F1',
        'calc-frame': '#95A5A6',
        'calc-display': '#1a3a2e',
        'calc-display-text': '#00ff41',
        'calc-button': '#BDC3C7',
        'calc-button-dark': '#7F8C8D',
        'calc-button-accent': '#3498DB',
        'calc-button-operator': '#E67E22',
        'calc-button-function': '#9B59B6',
        'calc-button-equals': '#E74C3C'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        'sans': ['DM Sans', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'calc-display': 'inset 0 4px 8px rgba(0, 0, 0, 0.3)',
        'calc-button': '0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'calc-button-pressed': 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
      },
      gridTemplateColumns: {
        'calc': 'repeat(5, 1fr)',
        'calc-mobile': 'repeat(4, 1fr)'
      }
    }
  },
  plugins: [],
}