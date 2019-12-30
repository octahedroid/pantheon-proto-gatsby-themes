

const baseTheme = require('gatsby-theme-pantheon-core/theme');

const myTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#48BB78',
    secondary: '#667EEA',
    accent: '#ED64A6',
    darkShade: '#C53030',
    lightShade: '#E2E8F0'
  },
  height:{
    ...baseTheme.height,
    hero: '700px'
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.heading,
      fontSize: "4rem",
    },
    h2: {
      ...baseTheme.heading,
      fontSize: "2.5rem",
    },
    h3: {
      ...baseTheme.heading,
      fontSize: "2rem",
    },
    h4: {
      ...baseTheme.heading,
      fontSize: "1.5rem",
    },
    h5: {
      ...baseTheme.heading,
      fontSize: "1.25rem",
      fontWeight: 'body',
    },
    h6: {
      ...baseTheme.heading,
      fontSize: "1rem",
    },
  }
}
// console.log(myTheme);
module.exports = myTheme;