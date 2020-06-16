const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = ({ themePath = `${__dirname}/theme` }) => {
  return {
    siteMetadata: {
      title: `Gatsby site with Airtable`,
      description: `Gatsby site with Airtable`,
      author: `@octahedroid`,
      github: `https://github.com/octahedroid`,
      blog: `/#`,
      product: `/#`,
      docs: `/#`,
      siteUrl: "http://example.com",
    },
    plugins: [
      {
        resolve: `gatsby-theme-pantheon-core`,
        options: {
          root: __dirname,
          themePath: themePath,
        },
      },
      // `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-airtable`,
        options: {
          apiKey: process.env.AIRTABLE_API_KEY,
          tables: [
            {
              baseId: `app31Z4rJdsAG6Gdg`,
              tableName: `Landing`,
              mapping: { Image: `fileNode` },
              tableLinks: [`Quote`, `Text`, `TextImage`],
            },
            {
              baseId: `app31Z4rJdsAG6Gdg`,
              tableName: `Quote`,
            },
            {
              baseId: `app31Z4rJdsAG6Gdg`,
              tableName: `Text`,
            },
            {
              baseId: `app31Z4rJdsAG6Gdg`,
              tableName: `TextImage`,
              mapping: { Image: `fileNode` },
            },
          ],
        },
      },
    ],
  };
};
