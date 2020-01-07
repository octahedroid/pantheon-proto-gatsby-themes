import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Card from 'gatsby-theme-pantheon-core/src/components/card';


function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      wordpress {
        posts {
          nodes {
            id
            title(format: RENDERED)
            excerpt(format: RENDERED)
            featuredImage {
              mediaItemUrl
            }
            slug
            date
          }
        }
      }
    }
  `)
  console.log(data.wordpress.posts.nodes);
  return (
    <Layout title="WordPress Posts">
      <Layout.Container flex >
      {data.wordpress.posts.nodes && data.wordpress.posts.nodes.map(post=>(
        <Card className="w-full lg:w-1/3">
          <Card.Intro>{post.meta}</Card.Intro>
          { post.featuredImage && <Card.Image to={`/${post.slug}`} name={post.featuredImage.mediaItemUrl}/> }
          <Card.Title>{post.title}</Card.Title>
          <Card.Text><div dangerouslySetInnerHTML={{__html:post.excerpt}}></div></Card.Text>
          <Card.Link to={`/${post.slug}`}>Read more...</Card.Link>
        </Card>
      ))}
      </Layout.Container>
    </Layout>
  );
}

export default IndexPage;
