import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";

import PageTitle from "gatsby-theme-pantheon-core/src/components/page-title";
// import TextBlock from "gatsby-theme-pantheon-core/src/components/text-block";
// import Quote from "gatsby-theme-pantheon-core/src/components/quote";
// import MediaItem from "gatsby-theme-pantheon-core/src/components/media-item";
// import HeroCta from "gatsby-theme-pantheon-core/src/components/hero-cta";
import Tags from "gatsby-theme-pantheon-core/src/components/tags";

const ArticleTemplate = props => {

  const {post} = props.data?props.data.wordpress:{};
  // console.log(post);
  return (
    <Layout>
      <SEO
        title={post.title}
        keywords={[post.slug, `gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Layout.Container>
        <PageTitle>
          <PageTitle.Intro>{post.date}</PageTitle.Intro>
          <PageTitle.Title>
            {post.title}
          </PageTitle.Title>
        </PageTitle>
        <hr className="border-b-2 mx-auto w-2/3 border-gray-200 block h-1" />
        <div dangerouslySetInnerHTML={{__html:post.content}}></div>
        <Tags tags={["tag 1", "tag 2"]} />
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
        content(format: RENDERED)
        terms {
          ... on Wordpress_Tag {
            name
            slug
          }
        }
      }
    }
  }
`