import React from 'react';
import MediaItem from "gatsby-theme-pantheon-core/src/components/media-item";
import Quote from "gatsby-theme-pantheon-core/src/components/quote";
import Paragraph from "gatsby-theme-pantheon-core/src/components/paragraph"

export const componentResolver = (data) => {
  const components = [];
  data.forEach((entity) => {
    if (entity.__typename.includes(`CoreQuoteBlock`)) {
      components.push(
        <Quote>
          <Quote.Text>
            <Paragraph dangerouslySetInnerHTML={{ __html: entity.attributes.value }} />
          </Quote.Text>
          <Quote.Author>{ entity.attributes.citation }</Quote.Author>
        </Quote>
      );
    }
    if (entity.__typename.includes(`CoreParagraphBlock`)) {
      components.push(<Paragraph dangerouslySetInnerHTML={{ __html: entity.originalContent }} />);
    }
    if (entity.__typename.includes(`CoreMediaTextBlock`)) {
      const media = entity.attributes.gatsbyImageFile;
      const paragraphs = [];
      entity.innerBlocks.forEach( block => {
        paragraphs.push(
          <MediaItem.Text>
            <Paragraph dangerouslySetInnerHTML={{ __html: block.originalContent }} />
          </MediaItem.Text>
        );
      });
      components.push(
        <MediaItem reverse={entity.attributes.mediaPosition==='right'}>
          <MediaItem.Column image>
            {media && <MediaItem.Image image={media.childImageSharp} /> }
          </MediaItem.Column>
          <MediaItem.Column>
            {paragraphs}
          </MediaItem.Column>
        </MediaItem>
      );
    }
  });

  return components;
}
