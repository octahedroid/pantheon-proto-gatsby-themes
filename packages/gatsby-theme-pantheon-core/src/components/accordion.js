import React from "react";
import PropTypes from "prop-types";

import IntroText from "./intro-text";
import Title from "./title";
import AccordionItem from "./accordion-item";

const Accordion = ({ intro, title, items }) => {
  return (
    <div className="container mx-auto py-3 lg:py-4">
      {intro && <IntroText centered>{intro}</IntroText>}
      {title && <Title as="h2" font="alternative" className="mb-3" centered>{title}</Title>}
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        {items &&
          items.map(item => (
            <AccordionItem heading={item.heading}>{item.text}</AccordionItem>
          ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

export default Accordion;
