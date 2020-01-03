
import React from 'react';

import MediaItem from "gatsby-theme-pantheon-core/src/components/media-item";
import Quote from "gatsby-theme-pantheon-core/src/components/quote";
import HeroCta from "gatsby-theme-pantheon-core/src/components/hero-cta";
import TextBlock from "gatsby-theme-pantheon-core/src/components/text-block";

export const componentResolver = (data, preview = false) => {
  const components = [];
  data.forEach(({entity}) => {

    if (entity.__typename.includes(`ParagraphFeature`)) {
      components.push(<HeroCta>
      <HeroCta.Column imageColumn>
        <HeroCta.Image name={entity.fieldImage.entity.gatsbyImageFile.childImageSharp.fluid.originalName} />
      </HeroCta.Column>
      <HeroCta.Column>
        <HeroCta.Text>
          <div dangerouslySetInnerHTML={{ __html: entity.fieldBody.processed }}/>
        </HeroCta.Text>
      </HeroCta.Column>
    </HeroCta>);
    }

    if (entity.__typename.includes(`ParagraphQuote`)) {
      components.push(<Quote>
        <Quote.Text>
          <div dangerouslySetInnerHTML={{ __html: entity.fieldBody.processed }}/>
        </Quote.Text>
        <Quote.Author>{ entity.fieldAuthor }</Quote.Author>
      </Quote>);
    }

    if (entity.__typename.includes(`ParagraphTextContent`)) {
      components.push(<TextBlock>
        <div dangerouslySetInnerHTML={{ __html: entity.fieldBody.processed }}/>
      </TextBlock>);
    }

    if (entity.__typename.includes(`ParagraphTextImage`)) {
      components.push(<MediaItem>
        <MediaItem.Title>{ entity.fieldTitle }</MediaItem.Title>
        <MediaItem.Column image>
          <MediaItem.Image name={entity.fieldImage.entity.gatsbyImageFile.childImageSharp.fluid.originalName} />
        </MediaItem.Column>
        <MediaItem.Column>
          <div dangerouslySetInnerHTML={{ __html: entity.fieldBody.processed }}/>
        </MediaItem.Column>
      </MediaItem>);
    }

  });

  return components;
}
