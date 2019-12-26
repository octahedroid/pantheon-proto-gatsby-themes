import React from "react";
import PropTypes from "prop-types";
import Cta from "./cta";
import ImageProvider from "./fluid-image-provider";
import IntroText from "./intro-text";
import Title from "./title";
import Paragraph from './paragraph';

// add left right align support
// add second cta
// add change image for form
// add form for cta

const HeroCta = ({ intro, title, text, link, ctaText, imageName }) => {
  return (
    <div className="bg-white py-4 lg:py-5 lg:pb-3 px-3 lg:px-0">
      <div className="container flex mx-auto flex-wrap items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 ">
          {intro && <IntroText>{intro}</IntroText>}
          {title && <Title big>{title}</Title>}
          {text && <Paragraph >{text}</Paragraph>}
          {ctaText && <Cta link={link} text={ctaText} type="primary" />}
        </div>
        <div className="w-full lg:w-1/2 hidden md:w-1/3 md:block">
          <ImageProvider src={imageName} />
        </div>
      </div>
    </div>
  );
};

HeroCta.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  ctaText: PropTypes.string,
  imageName: PropTypes.string.isRequired
};

export default HeroCta;
