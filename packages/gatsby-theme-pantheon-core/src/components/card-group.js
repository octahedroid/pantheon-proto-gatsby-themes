import React from "react";
import PropTypes from "prop-types";
import Card from "./card";
import Title from "./title";

// add description


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
