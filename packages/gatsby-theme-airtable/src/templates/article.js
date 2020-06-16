import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";
import PageTitle from "gatsby-theme-pantheon-core/src/components/page-title";
import Tags from "gatsby-theme-pantheon-core/src/components/tags";
import { componentResolver } from "../utils/component-resolver";

const ArticleTemplate = (props) => {
  // console.log(props);
  const post = props.data ? props.data.airtable : {};
  const sitename = props.data.site.siteMetadata.title;

  const quoteComponents = componentResolver(post.data.Quote, "Quote");
  const textComponents = componentResolver(post.data.Text, "Text");
  const textImageComponents = componentResolver(
    post.data.TextImage,
    "TextImage"
  );

  return (
    <Layout sitename={sitename}>
      <SEO
        title={post.data.Title}
        keywords={[
          post.data.Slug,
          `gatsby`,
          `tailwind`,
          `react`,
          `tailwindcss`,
        ]}
      />
      <Layout.Container>
        <PageTitle>
          <PageTitle.Intro>{post.data.Date}</PageTitle.Intro>
          <PageTitle.Title>{post.data.Title}</PageTitle.Title>
        </PageTitle>
        <hr className="border-b-2 mx-auto w-2/3 border-gray-200 block h-1" />

        {quoteComponents &&
          quoteComponents.map((item, i) => {
            return <React.Fragment key={i}>{item}</React.Fragment>;
          })}

        {textComponents &&
          textComponents.map((item, i) => {
            return <React.Fragment key={i}>{item}</React.Fragment>;
          })}

        {textImageComponents &&
          textImageComponents.map((item, i) => {
            return <React.Fragment key={i}>{item}</React.Fragment>;
          })}

        {/* {post.tags.nodes.length > 0 && (
          <Tags tags={post.tags.nodes.map((tag) => tag.name)} />
        )} */}
      </Layout.Container>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query post($id: String!) {
    airtable(id: { eq: $id }) {
      id
      data {
        Title
        Date(formatString: "YYYY MMMM DD")

        Text {
          data {
            Title
            Body
          }
        }

        Quote {
          data {
            Author
            Body
          }
        }

        TextImage {
          data {
            Title
            Body
            Image {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 760, height: 900) {
                    ...GatsbyImageSharpFixed
                  }
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
`;
