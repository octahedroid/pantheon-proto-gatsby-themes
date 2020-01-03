import React from "react";
import PropTypes from "prop-types";
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";

import PageTitle from "gatsby-theme-pantheon-core/src/components/page-title";
import Tags from "gatsby-theme-pantheon-core/src/components/tags";

import { componentResolver } from '../utils/component-resolver';

const ArticleTemplate = props => {

  const article = props.data.drupal.article;
  const contentComponents = componentResolver(article.fieldContent);
  let tags = [];
  {article.fieldTags && (
    article.fieldTags.map((item, i) => {
      tags.push(item.entity.name);
    })
  )}

  return (
    <Layout>
      <SEO
        title="Pantheon Drupal"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Layout.Container>
        <PageTitle>
          <PageTitle.Intro>{ article.entityCreated }</PageTitle.Intro>
          <PageTitle.Title>
            { article.title }
          </PageTitle.Title>
        </PageTitle>
        <hr className="border-b-2 mx-auto w-2/3 border-gray-200 block h-1" />

        {contentComponents && (
          contentComponents.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {item}
              </React.Fragment>
            )
          })
        )}

        <Tags tags={ tags } />
      </Layout.Container>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query article($id: String!) {
    drupal {
      article: nodeById(id: $id) {
        uuid: entityUuid
        id: entityId
        title
        path {
          alias
        }
        entityCreated(format: "M d, yy")
        ... on Drupal_NodeArticle {
          fieldContent {
            entity {
              ...ParagraphFeature
              ...ParagraphQuote
              ...ParagraphTextContent
              ...ParagraphTextImage
            }
          }
          fieldTags {
            entity {
              name
            }
          }
        }
      }
    } 
  }
`
