import React from "react";
import PropTypes from "prop-types";
import ImageSet from "./image-set";
import IntroText from "./intro-text";
import Title from "./title";

const ImageGroup = ({ intro, title, imageSets }) => {
  return (
    <div className="container mx-auto py-3 lg:py-4">
      {intro && <IntroText centered>{intro}</IntroText>}
      {title && <Title as="h2" font="alternative" className="mb-3" centered>{title}</Title>}
      {imageSets && (
        <div className="w-full">
          {imageSets.map((set, i) => (
            <ImageSet
              key={`${set.title}-${i}`}
              title={set.title}
              images={set.images}
            />
          ))}
        </div>
      )}
    </div>
  );
};

ImageGroup.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  imageSets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          link: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};

export default ImageGroup;
