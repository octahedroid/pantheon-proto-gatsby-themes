import React from "react";

import MediaItem from "gatsby-theme-pantheon-core/src/components/media-item";
import Quote from "gatsby-theme-pantheon-core/src/components/quote";
import Paragraph from "gatsby-theme-pantheon-core/src/components/paragraph";

export const componentResolver = (data, type) => {
  if (!data) {
    return;
  }

  const components = [];

  data.forEach((entity) => {
    if (!entity) {
      return;
    }

    if (type.includes(`Quote`)) {
      components.push(
        <Quote>
          <Quote.Text>
            <Paragraph dangerouslySetInnerHTML={{ __html: entity.data.Body }} />
          </Quote.Text>
          <Quote.Author>{entity.data.Author}</Quote.Author>
        </Quote>
      );
    }

    if (type.includes(`Text`)) {
      components.push(
        <Paragraph dangerouslySetInnerHTML={{ __html: entity.data.Body }} />
      );
    }

    if (type.includes(`TextImage`)) {
      const media = entity.data.Image.localFiles[0];
      console.log(entity);
      // const paragraphs = [];
      // entity.innerBlocks.forEach((block) => {
      //   paragraphs.push(
      //     <MediaItem.Text>
      //       <Paragraph
      //         dangerouslySetInnerHTML={{ __html: block.originalContent }}
      //       />
      //     </MediaItem.Text>
      //   );
      // });
      components.push(
        <MediaItem>
          <MediaItem.Column image>
            {media && <MediaItem.Image image={media.childImageSharp} />}
          </MediaItem.Column>
          <MediaItem.Column>
            <Paragraph dangerouslySetInnerHTML={{ __html: entity.data.Body }} />
          </MediaItem.Column>
        </MediaItem>
      );
    }
  });

  return components;
};
