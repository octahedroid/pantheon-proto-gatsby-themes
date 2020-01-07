/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `WordPress`,
    description: `Gatsby integration with Wordpress`,
    author: `@octahedroid`,
    github: `https://github.com/octahedroid`,
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
