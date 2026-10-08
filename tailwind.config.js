/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          900: '#0D0907',
          800: '#15100C',
          700: '#1F1813',
          600: '#2A211B',
        },
        neon: {
          amber: '#FF9F1C',
          amberDark: '#E08810',
          amberLight: '#FFB347',
          cyan: '#2EE6D6',
          cyanDark: '#1FC9BB',
          cyanLight: '#5FEFE3',
        },
        cream: '#F5EBDD',
        creamDark: '#D9CDB8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'neon-flicker': 'flicker 4s infinite alternate',
        'steam-rise': 'steam 3s ease-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 8px #FF9F1C) drop-shadow(0 0 16px #FF9F1C)',
          },
          '20%, 24%, 55%': { opacity: '0.4', filter: 'none' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-60px) scaleX(2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,159,28,0.3), 0 0 40px rgba(255,159,28,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(255,159,28,0.5), 0 0 60px rgba(255,159,28,0.2)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
