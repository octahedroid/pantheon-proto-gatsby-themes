
import { graphql } from 'gatsby';

export const MediaImage = graphql`
  fragment MediaImage on Drupal_MediaImage {
    entityLabel
    fieldMediaImage {
      url
    }
    gatsbyImageFile {
      name: base
      publicURL
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const ParagraphFeature = graphql`
  fragment ParagraphFeature on Drupal_ParagraphFeature {
    __typename
    fieldTitle
    fieldImage {
      entity {
        ...MediaImage
      }
    }
    fieldCentered
    fieldBody {
      processed
    }
  }
`

export const ParagraphQuote = graphql`
  fragment ParagraphQuote on Drupal_ParagraphQuote {
    __typename
    fieldAuthor
    fieldBody {
      processed
    }
  }
`

export const ParagraphTextContent = graphql`
  fragment ParagraphTextContent on Drupal_ParagraphTextContent {
    __typename
    fieldBody {
      processed
    }
  }
`

export const ParagraphTextImage = graphql`
  fragment ParagraphTextImage on Drupal_ParagraphTextImage {
    __typename
    fieldTitle
    fieldImage {
      entity {
        ...MediaImage
      }
    }
    fieldImageOrientation
    fieldBody {
      processed
    }
  }
`
