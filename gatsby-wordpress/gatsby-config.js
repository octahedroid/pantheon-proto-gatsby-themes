/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
      resolve: `gatsby-theme-pantheon-wordpress`,
      options: {
        root: __dirname,
      }
    }
  ]
}
