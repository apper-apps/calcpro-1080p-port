/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
      colors: {
        'ti84-body': '#1a1a2e',
        'ti84-dark': '#16213e',
        'ti84-accent': '#3498DB',
        'ti84-surface': '#e8e9ea',
        'ti84-frame': '#95A5A6',
        'calc-display': '#1a3a2e',
        'calc-display-text': '#00ff41',
        'calc-button': '#d4d4d4',
        'calc-button-dark': '#5a5a5a',
        'calc-button-accent': '#8b8b8b',
        'calc-button-operator': '#666666',
        'calc-button-function': '#777777',
        'calc-button-equals': '#4a4a4a'
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