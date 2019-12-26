import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import _isString from "lodash/isString";
import ImageProvider from "./fluid-image-provider";
import IntroText from "./intro-text";
import Cta from "./cta";
import Paragraph from "./paragraph";
import Title from "./title";
// add shadows or bordered version and rounded
// add image left right align?
//  support bg-color from main colors
const Card = ({ intro, title, text, image, link, ctaText, ctaButton }) => {
  return (
    <div className="p-3 lg:p-4">
      {intro && <IntroText>{intro}</IntroText>}
      {_isString(image) && <ImageProvider src={image} />}
      {!_isString(image) && <div className="mb-4">{image}</div>}
      {title && (
        <Title as="h3" className="font-alternative mb-3">
          {title}
        </Title>
      )}
      {text && <Paragraph>{text}</Paragraph>}
      {ctaButton && <Cta link={link} text={ctaText} type="primary" />}
      {!ctaButton && (
        <Link
          to={link}
          className="text-2xl text-primary no-underline hover:underline"
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
};

Card.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.oneOf([PropTypes.string, PropTypes.elementType]),
  link: PropTypes.string,
  ctaText: PropTypes.string,
  ctaButton: PropTypes.string
};

export default Card;
