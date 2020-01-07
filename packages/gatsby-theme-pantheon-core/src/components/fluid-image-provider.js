import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import _find from "lodash/find";
import BackgroundImage from "gatsby-background-image";

const FluidImageProvider = ({ src, className, asBackground, children, image }) => {
  const isExternal = src ? src.startsWith("http") : false;
  if (!image) {
    const data = useStaticQuery(graphql`
      query {
        allImageSharp {
          nodes {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              src
              originalName
            }
          }
        }
      }
    `);

    image = _find(
      data.allImageSharp.nodes,
      node => node.fluid.originalName === src
    );
  }

  return (
    <>
      {isExternal && src && <img className={className} src={src} />}
      {!isExternal && image && !asBackground && (
        <Img className={className} fluid={image.fluid} />
      )}
      {!isExternal && asBackground && (
        <BackgroundImage className={className} fluid={image.fluid}>
          {children}
        </BackgroundImage>
      )}
    </>
  );
};

FluidImageProvider.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  asBackground: PropTypes.bool
};

export default FluidImageProvider;
