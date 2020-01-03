const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  {
    drupal {
      articles: nodeQuery(filter: {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}) {
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
        component: path.resolve(__dirname + '/src/templates/article.js'),
        context: {
          id: article.id,
          uuid: article.uuid,
          slug: article.entityUrl.path,
        }
      });
    });

  });
};

