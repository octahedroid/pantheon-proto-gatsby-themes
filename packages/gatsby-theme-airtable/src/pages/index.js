import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "gatsby-theme-pantheon-core/src/components/card";

function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      posts: allAirtable(
        filter: { table: { eq: "Landing" } }
        sort: { fields: data___Text }
      ) {
        nodes {
          id
          data {
            Title
            Slug
            Date(formatString: "YYYY MMMM DD")
            Image {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const sitename = data.site.siteMetadata.title;

  return (
    <Layout title="Airtable Posts" sitename={sitename}>
      <Layout.Container flex>
        {data.posts.nodes &&
          data.posts.nodes.map((post) => (
            <Card className="w-full lg:w-1/3">
              <Card.Intro>{post.data.Date}</Card.Intro>
              {post.data.Image && (
                <Card.Image
                  to={post.data.Slug}
                  image={post.data.Image.localFiles[0].childImageSharp}
                />
              )}
              <Card.Title>{post.data.Title}</Card.Title>
              <Card.Link to={post.data.Slug}>Read more...</Card.Link>
            </Card>
          ))}
      </Layout.Container>
    </Layout>
  );
}

export default IndexPage;
