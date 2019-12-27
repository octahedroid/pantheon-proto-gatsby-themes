import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Cta from "./cta";
import IntroText from "./intro-text";
import Title from "./title";
import Paragraph from "./paragraph";
// support center content
// bg-darkShade text-white bg-lightShade text-black px-3 py-4 lg:py-6
const CtaBlock = props => {
  return (
    <div
      className={cx("px-3 py-4 lg:py-6", {
        "bg-darkShade text-white": props.dark,
        "bg-lightShade text-black": !props.dark
      })}
    >
      <div className="container mx-auto text-center">
        {props.children}
      </div>
    </div>
  );
};

CtaBlock.Intro = props => <IntroText dark={props.dark}>{props.children}</IntroText>;
CtaBlock.Title = props => (
  <Title as="h2" className="mb-3" color={props.dark ? "white" : "black"}>
    {props.children}
  </Title>
);
CtaBlock.Text = props => (
  <Paragraph className="mb-3 lg:mb-5 text-2xl max-w-3xl mx-auto block">
    {props.children}
  </Paragraph>
);
CtaBlock.Cta = props => (
  <Cta to={props.to} type={props.dark ? "lightShade" : "darkShade"} darkText={props.dark}>
    {props.children}
  </Cta>
);

export default CtaBlock;
