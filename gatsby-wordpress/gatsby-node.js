/** @TODO move code to a plugin */
const parser = require('@wordpress/block-serialization-default-parser');
const parse5 = require('parse5');

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
    Wordpress_Post: {
      gutenbergBlocks: {
        type: `JSON`,
        resolve(source, args, context, info) {
          return parser.parse( source.content );
        },
      }
    },
  })
}
