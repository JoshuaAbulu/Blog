/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Robot'],
        lora: ['Lora'],
        cormorant: ['Cormorant'],
        playfair: ['Playfair Display'],
      },
      minHeight: {
        '1/6': '16.666667%',
      },
      padding: {
        '1/6': '16.666667%',
        '1/12': '8.333334%',
      },
    },
  },
  plugins: [],
}

