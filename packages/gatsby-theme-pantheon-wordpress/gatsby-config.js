const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = ({ themePath = `${__dirname}/theme` }) => {
  return {
    siteMetadata: {
      title: `Gatsby site with Wordpress & Gutemberg`,
      description: `Gatsby site with Wordpress & Gutemberg`,
      author: `@octahedroid`,
      github: `https://github.com/octahedroid`,
      blog: `/#`,
      product: `/#`,
      docs: `/#`,
      siteUrl: "http://example.com"
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
          typeName: "Wordpress",
          fieldName: "wordpress",
          url: `${process.env.WORDPRESS_GRAPHQL}/graphql`,
          // HTTP headers
          headers: {
            // Learn about environment variables: https://gatsby.dev/env-vars
            Authorization: `Bearer ${process.env.WORDPRESS_TOKEN}`
          },
        }
      }
    ]
  };
};
