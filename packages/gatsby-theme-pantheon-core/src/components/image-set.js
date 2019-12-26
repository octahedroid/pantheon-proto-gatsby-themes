import React from "react";
import PropTypes from "prop-types";
import ImageProvider from "./fluid-image-provider";
import LinkEI from "./link-external-internal";
import Title from "./title";
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

const ImageSet = ({ title, images }) => {
  const { theme } = useThemeUI();
  return (
    <div className="w-full pb-3 lg:pb-4">
      {title && (
        <Title as="h4" className="text-center mb-3 text-primary ">
          {title}
        </Title>
      )}
      <div className="flex flex-wrap items-center justify-center">
        {images &&
          images.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="w-full md:w-1/2 lg:w-1/5 px-3"
              sx={{
                transition: theme.transitions.filter,
                filter: "grayscale(1)",
                "&:hover": {
                  filter: "grayscale(0)"
                }
              }}
            >
              {image.link && (
                <LinkEI link={image.link}>
                  <ImageProvider src={image.src} />
                </LinkEI>
              )}
              {!image.link && <ImageProvider src={image.src} />}
            </div>
          ))}
      </div>
    </div>
  );
};

ImageSet.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default ImageSet;
