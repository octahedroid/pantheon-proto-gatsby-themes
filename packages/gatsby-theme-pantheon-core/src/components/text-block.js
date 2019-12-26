import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import IntroText from "./intro-text";
import Title from "./title";
// px-3 pb-4 lg:py-4 container mx-auto flex flex-col items-center justify-start text-lg 
const TextBlock = ({ intro, title, centered, children }) => {
  return (
    <div
      className={`px-3 pb-4 lg:py-4 container mx-auto ${
        centered ? "flex flex-col items-center justify-start" : ""
      }`}
    >
      {intro && <IntroText centered={centered}>{intro}</IntroText>}
      {title && (
        <Title big centered={centered}>
          {title}
        </Title>
      )}
      <Styled.root className={`text-lg ${centered ? "text-center" : ""}`}>
        {children}
      </Styled.root>
    </div>
  );
};

TextBlock.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  centered: PropTypes.bool
};

export default TextBlock;
