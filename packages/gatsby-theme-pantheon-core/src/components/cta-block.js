import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import Cta from "./cta";
import IntroText from "./intro-text";
import Title from "./title";
import Paragraph from './paragraph';
// support center content
// bg-darkShade text-white bg-lightShade text-black px-3 py-4 lg:py-6
const CtaBlock = ({ intro, title, text, link, ctaText, dark }) => {
  return (
    <div
      className={cx('px-3 py-4 lg:py-6',{
        "bg-darkShade text-white": dark,
        "bg-lightShade text-black": !dark,
      })}
    >
      <div className="container mx-auto text-center">
        {intro && <IntroText dark={dark}>{intro}</IntroText>}
        {title && <Title as="h2" className="mb-3" color={dark?'white':'black'}>{title}</Title>}
        {text && (
          <Paragraph className="mb-3 lg:mb-5 text-2xl max-w-3xl mx-auto block">
            {text}
          </Paragraph>
        )}
        {ctaText && (
          <Cta
            link={link}
            text={ctaText}
            type={dark ? "lightShade" : "darkShade"}
            darkText={dark}
          />
        )}
      </div>
    </div>
  );
};

CtaBlock.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  ctaText: PropTypes.string,
  dark: PropTypes.bool
};

export default CtaBlock;
