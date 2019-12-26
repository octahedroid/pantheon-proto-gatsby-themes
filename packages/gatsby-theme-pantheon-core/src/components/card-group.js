import React from "react";
import PropTypes from "prop-types";
import Card from "./card";
import Title from "./title";

// add description

const CardGroup = ({ title, columns, items }) => {
  return (
    <div className="container mx-auto py-3">
      {title && <Title as="h2" font="alternative" centered>{title}</Title>}
      <div className="flex flex-wrap items-start">
        {items &&
          items.map(card => (
            <div className={`w-full lg:w-1/${columns}`}>
              <Card
                intro={card.intro}
                title={card.title}
                image={card.image}
                text={card.text}
                link={card.link}
                ctaText={card.ctaText}
                ctaButton={card.ctaButton}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

CardGroup.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOf([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

export default CardGroup;
