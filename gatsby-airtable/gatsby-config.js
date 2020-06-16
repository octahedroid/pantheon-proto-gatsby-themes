/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Airtable`,
    description: `Gatsby integration with Airtable`,
    author: `@octahedroid`,
    github: `https://github.com/octahedroid`,
    siteUrl: "http://example.com",
  },
  plugins: [
    {
      resolve: `gatsby-theme-airtable`,
      options: {
        root: __dirname,
      },
    },
  ],
};
