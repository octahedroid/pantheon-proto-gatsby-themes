import { graphql } from "gatsby";

export const CoreMediaTextBlock = graphql`
  fragment CoreMediaTextBlock on Wordpress_CoreMediaTextBlock {
    attributes {
      mediaUrl
      mediaPosition
      gatsbyImageFile {
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
    innerBlocks {
      originalContent
    }
  }
`;
export const CoreParagraphBlock = graphql`
  fragment CoreParagraphBlock on Wordpress_CoreParagraphBlock {
    originalContent
  }
`;

export const CoreQuoteBlock = graphql`
  fragment CoreQuoteBlock on Wordpress_CoreQuoteBlock {
    attributes {
      value
      citation
    }
  }
`;
