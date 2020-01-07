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
  })

  createResolvers({
    Wordpress_Post: {
      gutenbergBlocks: {
        type: `JSON`,
        resolve(source, args, context, info) {
          const blocks = gutenbergParser.parse( source.content ).map(block=>{
            if(!block.blockName){
              return block;
            }

            if(block.innerBlocks.length && block.innerBlocks.length>0){
              block.innerBlocks = block.innerBlocks.map(innerBlock=>{
                innerBlock.innerHTML = innerHTML(innerBlock)
                return innerBlock;
              })
            }

            block.innerHTML = innerHTML(block)

            return block
          })

          return blocks;
        },
      },
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

