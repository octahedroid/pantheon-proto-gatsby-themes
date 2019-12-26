import React from "react";
import PropTypes from "prop-types";
import Title from './title';
// text-accent
const IntroText = ({ children, centered, dark }) => {
  return (
    <Title as="h5"
      className={`text-secondary uppercase mb-2 font-normal leading-none lg:mb-3 ${centered &&
        "text-center"} ${dark ? "text-accent" : "text-secondary"}`}
    >
      {children}
    </Title>
  );
};

IntroText.propTypes = {
  centered: PropTypes.bool,
  dark: PropTypes.bool
};

IntroText.defaultProps = {
  centered: '',
  dark: false
};
export default IntroText;
