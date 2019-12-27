import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";

// px-3 pb-4 lg:py-4 container mx-auto flex flex-col items-center justify-start text-lg 
const TextBlock = ({ children }) => {
  return (
    <div
      className={`px-3 pb-4 lg:py-4 container mx-auto ${
        centered ? "flex flex-col items-center justify-start" : ""
      }`}
    >
      <Styled.root className={`text-lg `}>
        {children}
      </Styled.root>
    </div>
  );
};


export default TextBlock;
