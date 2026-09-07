/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFF8EC',
        ink: '#211D16',
        muted: '#8C8371',
        coral: '#FF5A5F',
        spring: '#1EA672',
        surface: '#F1E7D4',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        driftA: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(6px, -10px) rotate(8deg)' },
        },
        driftB: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-8px, 8px) rotate(-6deg)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        driftA: 'driftA 6s ease-in-out infinite',
        driftB: 'driftB 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
