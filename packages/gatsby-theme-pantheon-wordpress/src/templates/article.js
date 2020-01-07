import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";
import PageTitle from "gatsby-theme-pantheon-core/src/components/page-title";
import Tags from "gatsby-theme-pantheon-core/src/components/tags";
import { componentResolver } from "../utils/component-resolver";

const ArticleTemplate = props => {

  const { post } = props.data ? props.data.wordpress : {};
  const contentComponents = componentResolver(post.gutenbergBlocks);
  const sitename = props.data.site.siteMetadata.title;

  return (
    <Layout sitename={ sitename }>
      <SEO
        title={post.title}
        keywords={[post.slug, `gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Layout.Container>
        <PageTitle>
          <PageTitle.Intro>{post.date_formatted}</PageTitle.Intro>
          <PageTitle.Title>{post.title}</PageTitle.Title>
        </PageTitle>
        <hr className="border-b-2 mx-auto w-2/3 border-gray-200 block h-1" />

        {contentComponents &&
          contentComponents.map((item, i) => {
            return <React.Fragment key={i}>{item}</React.Fragment>;
          })}
        <Tags tags={post.terms.map(term=>term.name)} />
      </Layout.Container>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query post($id: ID!) {
    wordpress {
      post(id: $id) {
        title
        slug
        date
        date_formatted
        content(format: RAW)
        gutenbergBlocks
        terms {
          ... on Wordpress_Tag {
            name
            slug
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
