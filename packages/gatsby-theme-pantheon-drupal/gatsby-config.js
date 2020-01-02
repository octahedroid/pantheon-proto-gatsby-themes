const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = ({ themePath = `${__dirname}/theme` }) => {  
  return {
    siteMetadata: {
      title: `Gatsby site with Drupal`,
      description: `Gatsby site with Drupal`,
      author: `@octahedroid`,
      github: `https://github.com/octahedroid`,
      blog: `/#`,
      product: `/#`,
      docs: `/#`,
      siteUrl: 'http://example.com'
    },
    plugins: [
      {
        resolve: `gatsby-theme-pantheon-core`,
        options: {
          root: __dirname,
          themePath: themePath
        }
      },
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "Drupal",
          fieldName: "drupal",
          url: `${process.env.DRUPAL_URL}/graphql`,
          headers: {
            Authorization: `Bearer ${process.env.DRUPAL_TOKEN}`,
          },
        },
      },
      "gatsby-source-drupal-graphql"
    ],
  };
}
