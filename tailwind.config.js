/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4B6344', // Forest Green Accent/Buttons
        'primary-60': '#5E7A55', // Forest Green hover/lighter
        'primary-70': '#3A4D34', // Forest Green darker
        secondary: '#E19946', // Clay/Ochre Yellow
        tertiary: '#1C1C1C', // Charcoal text
        neutral: '#F5EFEB', // Cream/Off-white background
        surface: '#FFFFFF', // Pure White for cards
        'on-surface': '#1C1C1C', // Charcoal text
        'surface-accent': '#E59F94', // Pastel Pink/Salmon
        error: '#B91C1C',
      },
      fontFamily: {
        termina: ['Outfit', 'system-ui', 'sans-serif'],
        garamond: ['EB Garamond', 'Georgia', 'serif'],
        script: ['WindSong', 'Dancing Script', 'cursive'],
      },
      fontSize: {
        'headline-display': ['40px', { lineHeight: '48px', letterSpacing: '0' }],
        'headline-lg': ['32px', { lineHeight: '45px', letterSpacing: '0' }],
        'headline-md': ['25px', { lineHeight: '40px', letterSpacing: '0' }],
        'headline-sm': ['20px', { lineHeight: '24px', letterSpacing: '0' }],
        'body-lg': ['18px', { lineHeight: '27px', letterSpacing: '0' }],
        'body-md': ['16px', { lineHeight: '23px', letterSpacing: '0' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0' }],
        'label-lg': ['16px', { lineHeight: '20px', letterSpacing: '0' }],
        'label-md': ['14px', { lineHeight: '18px', letterSpacing: '0' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0' }],
        'script-lg': ['32px', { lineHeight: '45px', letterSpacing: '0' }],
        'script-md': ['24px', { lineHeight: '34px', letterSpacing: '0' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '16px',
        'md': '30px',
        'lg': '50px',
        'xl': '94px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '24px',
        'full': '9999px',
      },
      animation: {
        'hero-zoom': 'heroZoom 20s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
