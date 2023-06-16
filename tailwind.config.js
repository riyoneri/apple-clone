/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Pro-Text-Regular",
        "main-light": "",
        "main-bold": "Pro-Text-Bold",
        "main-semi-bold": "Pro-Text-Semibold"
      },
      backgroundImage: {
        "racial-equity": "url(/assets/images/promo__sw58lbodkmqq_large.jpg)"
      },
      colors: {
        "link": "#06c",
        "my-zinc": "#231F20",
        "main": "",
        "hover": "",
        "my-gray": "#F5F5F7"
      }
    },
  },
  plugins: [],
}

