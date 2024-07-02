/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  fontFamily: {
    serif: ['"Varela Round"', 'sans-serif'],
  },
  extend: {},
}
export const plugins = [require("tailwindcss-animate"), require("@tailwindcss/typography")]