module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat',
        OpenSans: 'OpenSans'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#03045E",

          secondary: "#48CAE4",

          accent: "#b0b0b0",

          neutral: "#e6e6e6",

          "base-100": "#FFFFFF",

          info: "#b08ead",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}