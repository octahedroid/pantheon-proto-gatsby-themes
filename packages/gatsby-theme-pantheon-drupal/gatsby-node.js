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

    // Create pages.
    const articles = result.data.drupal.articles.entities;
    articles.forEach(article => {

      console.info(article);

      // createPage({
      //   path: page.entityUrl.path,
      //   component: path.resolve(`./src/templates/article.js`),
      //   context: {
      //     id: page.id,
      //     uuid: page.uuid,
      //     slug: page.entityUrl.path,
      //   }
      // });
    });

  });
};

