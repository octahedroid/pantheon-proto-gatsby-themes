import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Cta from "./cta";
import ImageProvider from "./fluid-image-provider";
import IntroText from "./intro-text";
import Title from "./title";
import Paragraph from "./paragraph";

// add left right align support
// add second cta
// add change image for form
// add form for cta

const HeroCta = ({ intro, title, text, to, ctaText, imageName }) => {
  return (
    <div className="bg-white py-4 lg:py-5 lg:pb-3 px-3 lg:px-0">
      <div className="container flex mx-auto flex-wrap items-center">
        {props.children}
      </div>
    </div>
  );
};

HeroCta.Intro = props => <IntroText>{props.children}</IntroText>;
HeroCta.Title = props => <Title big>{props.children}</Title>;
HeroCta.Text = props => <Paragraph>{props.children}</Paragraph>;
HeroCta.Cta = props => <Cta {...props}>{props.children}</Cta>;
HeroCta.Column = props => (
  <div
    className={cx("w-full lg:w-1/2", {
      "md:w-2/3": !props.imageColumn,
      "hidden md:w-1/3 md:block": props.imageColumn
    })}
  >
    {props.children}
  </div>
);
HeroCta.Image = props => <ImageProvider src={props.name} />;

export default HeroCta;
