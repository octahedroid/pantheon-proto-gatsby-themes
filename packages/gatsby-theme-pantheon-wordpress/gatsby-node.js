const path = require("path");
const gutenbergParser = require('@wordpress/block-serialization-default-parser');
const html2json = require('html2json').html2json;
const _isNil = require('lodash/isNil')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { format } = require('date-fns');

const innerHTML = (block) => {
  return _isNil(block.innerHTML) ? block.innerHTML : html2json(block.innerHTML);
}

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
    Wordpress_CoreMediaTextBlockAttributes: {
      gatsbyImageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          if (source.mediaUrl) {
            return createRemoteFileNode({
              url: source.mediaUrl,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          }
          
          return null;
        },
      },
    },
  })

  createResolvers({
    Wordpress_Post: {
      date_formatted: {
        type: `String`,
        resolve(source, args, context, info) {
          return format(new Date(source.date), "MMM dd, yyyy");
        }
      }
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
    const posts = result.data.wordpress.posts.nodes;
    posts.forEach(post => {
      createPage({
        path: `/${post.slug}`,
        component: path.resolve(__dirname+'/src/templates/article.js'),
        context: {
          id: post.id,
          slug: post.slug,
        }
      });
    });

  });
};

