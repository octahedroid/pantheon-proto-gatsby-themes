const dotenv = require('dotenv')
const tailwindcss = require("tailwindcss");
// See https://tailwindcss.com/docs/configuration for details
const toTailwind = require('@theme-ui/tailwind');
// const theme = require('./theme');
// const tailwindConfig = toTailwind(theme);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = ({ themePath = `${__dirname}/theme` }) => {
  const tailwindConfig = toTailwind(require(themePath));
  
  return {
  siteMetadata: {
    title: `Octahedroid`,
    description: `We do JAMstack`,
    author: `@jmolivas`,
    github: `https://github.com/octahedroid`,
    blog: `/#`,
    product: `/#`,
    docs: `/#`,
    siteUrl: process.env.PROJECT_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // support fot tailwind spacial classes
        specialChars: '/:',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss(tailwindConfig), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        debug: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"],
        whitelistPatterns: [/primary$/, /secondary$/, /accent$/, /lightShade$/, /darkShade$/, /hero$/, /navbar$/, /nabvar$/, /screen$/,  /flex-$/, /w-1$/],
        whitelistPatternsChildren: [/primary$/, /secondary$/, /accent$/, /lightShade$/, /darkShade$/, /hero$/, /navbar$/, /nabvar$/, /screen$/,  /flex$/, /w-1$/],
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`700`]
          },
          {
            family: `Noto Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
  ]
}};
