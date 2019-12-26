import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import ListItemWIcon from "./list-item-w-icon";
import Title from "./title";

// add cta 
// add description
// md:w-1/2
const list = ({ title, columns, items, className }) => {
  return (
    <div className={cx("py-3 container mx-auto px-3 lg:px-0", className)}>
      {title&&<Title as="h2" font="alternative" centered className="mb-3">{title}</Title>}
      <ul className="list-reset flex flex-wrap">
        {items &&
          items.map(item => (
            <ListItemWIcon
              icon={item.icon}
              iconClassName={item.iconClassName}
              iconColor={item.iconColor}
              link={item.link}
              text={item.text}
              className={cx('w-full',{
                [`md:w-1/2 lg:w-1/${columns}`]: columns>1,
              } )}
            />
          ))}
      </ul>
    </div>
  );
};

list.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      text: PropTypes.string
    })
  ).isRequired
};

export default list;
