

const baseTheme = require('gatsby-theme-pantheon-core/theme');

const myTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    black: '#F7FAFC',
    white: '#1A202C',
    body: '#F7FAFC',
    primary: '#FAF089',
    secondary: '#90CDF4',
    accent: '#ED64A6',
    darkShade: '#F687B3',
    lightShade: '#E2E8F0'
  },
  height:{
    ...baseTheme.height,
    hero: '700px'
  },
}

module.exports = myTheme;