/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: { purple : '#5165f6;', 
                darkPurple : '#404eed',
                gray : '#99aab5',
                faintBlack : '#2c2f33',
                darkBlack : '#23272a' },
      fontFamily: { Whitney : ["Whitney"],
                     Ginto: ["Ginto"],
                     ggSansMedium: ["ggSansMedium"],
                     ggSansNormal: ["ggSansNormal"],
                     ggSansBold: ["ggSansaBold"],
                     Gintonord: ["Gintonord"]
                  },
    },
  },
  plugins: [],
}

