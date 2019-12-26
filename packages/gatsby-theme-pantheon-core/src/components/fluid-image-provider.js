import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import _find from "lodash/find";
import BackgroundImage from "gatsby-background-image";

const FluidImageProvider = ({ src, className, asBackground, children }) => {
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
  const image = _find(
    data.allImageSharp.nodes,
    node => node.fluid.originalName === src
  );
  return (
    <>
      {image && !asBackground && (
        <Img className={className} fluid={image.fluid} />
      )}
      {asBackground && (
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
