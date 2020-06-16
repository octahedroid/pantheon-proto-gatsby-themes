const path = require("path");
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter
}) => {
  const { createNode } = actions;
  createResolvers({
    Drupal_MediaImage: {
      gatsbyImageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.fieldMediaImage.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          });
        }
      }
    }
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      drupal {
        articles: nodeQuery(
          filter: {
            conditions: [
              { operator: EQUAL, field: "type", value: ["article"] }
              { operator: EQUAL, field: "status", value: ["1"] }
            ]
          }
        ) {
          entities {
            uuid: entityUuid
            id: entityId
            entityUrl {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create articles.
    const articles = result.data.drupal.articles.entities;
    articles.forEach(article => {
      createPage({
        path: article.entityUrl.path,
        component: path.resolve(__dirname + "/src/templates/article.js"),
        context: {
          id: article.id,
          uuid: article.uuid,
          slug: article.entityUrl.path
        }
      });
    });
  });
};
