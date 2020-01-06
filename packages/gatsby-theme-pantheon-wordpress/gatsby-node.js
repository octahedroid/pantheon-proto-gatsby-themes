const path = require("path");
/** @TODO move code to a plugin */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  createResolvers({
    Wordpress_MediaItem: {
      gatsbyImageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.mediaItemUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  {
    wordpress {
      posts{
        nodes {
          slug
          id
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create pages.
    const articles = result.data.wordpress.posts.nodes;
    articles.forEach(article => {

      // console.info(article);

      createPage({
        path: `/${article.slug}`,
        component: path.resolve(__dirname+'/src/templates/article.js'),
        context: {
          id: article.id,
          slug: article.slug,
        }
      });
    });

  });
};

