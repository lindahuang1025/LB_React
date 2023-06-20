/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '600px',
        md: '720px',
        lg: '940px',
        xl: '1140px',
        '2xl': '1339px',
      },
    },
    colors: {
      primary: '#5eb400',
      second: '#3a9820',
      drakGreen: '#1b7600',
      lightGreen: '#2a8f00',
      white: '#fff',
      black: "black",
      gray: "#000",
      red: "#d0021b",
    },
  },
  plugins: [],
}

