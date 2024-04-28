const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const {
  default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: {
          medium: 'rgba(61, 49, 193, 1)',
          light: 'rgba(182, 46, 167, 1)', 
          dark: 'rgba(112, 17, 153, 1)',
        },
        customBlue:{
          light: 'rgba(61, 49, 193, 1)',
          dark:'rgba(152, 95, 241, 1)',
        },
        
        customNavBlue:{
          light: 'rgba(1, 0, 31, 0.5)',
          medium:'rgba(54,46,116,0.5)',
          dark:'rgba(1, 0, 31, 1)',
        },
        customCardColor: {
          dark: 'rgba(8, 7, 40, 1)',
          light:'rgba(57, 48, 145, 1)'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": {backgroundPosition: "100% 50%"},
        },
      },
      animation: {
        gradient: "gradient 7s linear infinite",
      },
     
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors
  ]
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars
  })
}
