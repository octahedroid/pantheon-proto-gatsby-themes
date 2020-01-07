import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import { Link } from "gatsby";
import _isString from "lodash/isString";
import ImageProvider from "./fluid-image-provider";
import IntroText from "./intro-text";
import Cta from "./cta";
import Paragraph from "./paragraph";
import Title from "./title";

const Card = props => {
  return (
    <div className={cx("p-3 lg:p-4", props.className)}>
      {props.children}
    </div>
  );
};

Card.Intro = props => <IntroText>{props.children}</IntroText>;
Card.Image = props => (
  <Link
    to={props.to}
    className="text-2xl text-primary no-underline hover:underline"
  >
    {props.name && <ImageProvider src={props.name} />}
    {props.image && <ImageProvider image={props.image} />}
  </Link>
);
Card.Title = props => (
  <Title as="h3" className="font-alternative mb-3">
    {props.children}
  </Title>
);
Card.Text = props => <Paragraph>{props.children}</Paragraph>;
Card.Button = props => <Cta {...props}>{props.children}</Cta>;
Card.Link = props => (
  <Link
    to={props.to}
    className="text-2xl text-primary no-underline hover:underline"
  >
    {props.children}
  </Link>
);

Card.Group = props => {
  return (
    <div className="container mx-auto py-3">
      <div className="flex flex-wrap items-start">{props.children}</div>
    </div>
  );
};

Card.GroupTitle = props => (
  <Title as="h2" font="alternative" centered>
    {props.children}
  </Title>
);

export default Card;
