
import React from 'react';
import _find from 'lodash/find';
import MediaItem from "gatsby-theme-pantheon-core/src/components/media-item";
import Quote from "gatsby-theme-pantheon-core/src/components/quote";
import Title from "gatsby-theme-pantheon-core/src/components/title";
import Paragraph from "gatsby-theme-pantheon-core/src/components/paragraph";
import FluidImage from "gatsby-theme-pantheon-core/src/components/fluid-image-provider";

export const componentResolver = (data, preview = false) => {
  const components = [];
  data.forEach((block) => {

    if (block.blockName === `core/image`) {
      components.push(<FluidImage src="hero.png" />);
    }

    if (block.blockName === `core/quote`) {
      const node = _find(block.innerHTML.child, node => node.tag === 'blockquote')
      const text = _find(node.child, node => node.tag === 'p')
      const author = _find(node.child, node => node.tag === 'cite')
      components.push(<Quote>
        <Quote.Text>
          <p dangerouslySetInnerHTML={{ __html: text.child[0].text }}/>
        </Quote.Text>
        <Quote.Author>{ author.child[0].text }</Quote.Author>
      </Quote>);
    }

    if (block.blockName === `core/paragraph`) {
      components.push(<Paragraph dangerouslySetInnerHTML={{ __html: block.innerContent.join() }} />);
    }

    if (block.blockName === `core/heading`) {
      const node = _find(block.innerHTML.child, node => node.node === 'element')
      components.push(<Title as={node.tag}>{node.child[0].text}</Title>);
    }

    if (block.blockName === `core/media-text`) {

      const image = block.attrs.mediaId
      const title = _find(_find(block.innerBlocks, node => node.blockName === 'core/heading').innerHTML.child, tag => tag.tag==='h2').child[0]
      const text = _find(_find(block.innerBlocks, node => node.blockName === 'core/paragraph').innerHTML.child, tag => tag.tag==='p').child[0]
      components.push(<MediaItem reverse={block.attrs.mediaPosition==='right'}>
        <MediaItem.Column image>
          <MediaItem.Image name="hero.png" />
        </MediaItem.Column>
        <MediaItem.Column>
          <MediaItem.Title>{title.text}</MediaItem.Title>
          <MediaItem.Text>{text.text}</MediaItem.Text>
        </MediaItem.Column>
      </MediaItem>);
    }

  });

  return components;
}
