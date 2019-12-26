import React from "react";
import PropTypes from "prop-types";
import Title from "./title";
import Card from "./card";
import CardGroup from './card-group';
const RelatedContent = ({ posts }) => {

  const items = posts.map(post=>({
    image: post.image,
    title: post.title,
    text: post.excerpt,
    link: post.link,
    ctaText: 'Read more...',
  }))

  return (
    <CardGroup
      title="Readers also like:"
      columns={3}
      items={items}
    />
  );
};

RelatedContent.propTypes = {
  posts: PropTypes.array
};

RelatedContent.defaultProps = {
  posts: [
  ]
};
export default RelatedContent;
