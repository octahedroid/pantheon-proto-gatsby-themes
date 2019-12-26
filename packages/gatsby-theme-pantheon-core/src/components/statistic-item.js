import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Paragraph from './paragraph';
import Title from './title';
const StatisticItem = ({stat, title, text, className, color}) => {
  return (
    <div className={cx('text-center p-3', className)}>
      <h2 className={cx("text-6xl font-bold pb-2", {[`text-${color}`]: color})} >{stat}</h2>
      {title&&<Title as="h4" className="pb-2" >{title}</Title>}
      {text&&<Paragraph className="text-md" >{text}</Paragraph>}
    </div>
  );
};

StatisticItem.propTypes = {
  stat: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
StatisticItem.defaultProps = {
  color: 'secondary'
};

export default StatisticItem;