const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      posts: allAirtable(filter: { table: { eq: "Landing" } }) {
        nodes {
          id
          data {
            Title
            Slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create pages.
    const posts = result.data.posts.nodes;
    posts.forEach((post) => {
      console.log(post.id);
      console.log(post.data.Title);
      console.log(post.data.Slug);
      createPage({
        path: post.data.Slug,
        component: path.resolve(__dirname + "/src/templates/article.js"),
        context: {
          id: post.id,
          slug: post.data.Slug,
        },
      });
    });
  });
};
