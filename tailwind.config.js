module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary': '#EEEDDE',
      'secondary': '#E0DDAA',
      'accent-1': '#203239',
      'accent-2': '#141E27',
      'secondary-shade': '#E0DDAAbb',
      'accent-shade': '#203239bb',
      'transparent': 'transparent',
      'current': 'currentColor',

    },
    fontFamily: {
        pop : ['Poppins', 'sans-serif'],
        mono : ['Roboto\\ Mono', 'monospace'],
    },
    minWIdth:{
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    }
  },
  plugins: [],
}
