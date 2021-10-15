module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      primary: "#86BBD8",
      secondary: "#F6AE2D",
      tertiary: "#F26419",
      xdark: "#0B132B",
      dark: "#1C2541"
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
