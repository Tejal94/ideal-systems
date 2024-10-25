/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg, #1A1823 0%, rgba(0, 0, 0, 0.63) 34.27%, rgba(217, 217, 217, 0) 112.14%), url('./assets/banner/banner-home.svg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["cupcake"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
};
