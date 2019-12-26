// group of stats with stat-item with title, desc and big stat
import React from 'react';
import PropTypes from 'prop-types';
import Statistic from './statistic-item';
import Title from './title';
const Stats = ({ title, columns, items }) => {
  return (
    <div className="container mx-auto py-3">
      {title && <Title as="h2" font="alternative" centered>{title}</Title>}
      <div className="flex flex-wrap items-start">
        {items &&
          items.map(item => (
            <div className={`w-full lg:w-1/${columns}`}>
              <Statistic
                stat={item.stat}
                title={item.title}
                text={item.text}
              />
            </div>
          ))}
      </div>
    </div>
  );
};


Stats.propTypes = {
  
};

export default Stats;