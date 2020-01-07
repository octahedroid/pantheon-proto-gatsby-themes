/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Drupal`,
    description: `Gatsby implementation with Drupal`,
    author: `@octahedroid`,
    github: `https://github.com/octahedroid`,
    siteUrl: 'http://example.com'
  },
  plugins: [
    {
      resolve: `gatsby-theme-pantheon-drupal`,
      options: {
        root: __dirname,
      }
    }
  ]
}
