/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      'orange' : '#dd571c',
      'white' : '#ffffff',
      'black' : '#000000',
      'gray': '#6b7280',
      'primary' : '#003882',
    },
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: false,
    themes: ["light"],
    rtl: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

