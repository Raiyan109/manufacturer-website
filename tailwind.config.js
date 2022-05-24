module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#5f4d5d",

          secondary: "#d7b7d4",

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
  ],
}