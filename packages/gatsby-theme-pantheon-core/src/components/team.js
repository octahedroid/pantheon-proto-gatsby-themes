// grid of workers

import React from 'react';
import PropTypes from 'prop-types';
import Worker from './worker';
import Title from './title';

// p-2
const Team = ({ title, columns, items }) => {
  return (
    <div className="container mx-auto py-3">
      {title && <Title as="h2" font="alternative" centered>{title}</Title>}
      <div className="flex flex-wrap items-start">
        {items &&
          items.map(card => (
            <div className={`w-full p-2 lg:w-1/${columns}`}>
              <Worker
                avatar={card.avatar}
                name={card.name}
                job={card.job}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
Team.propTypes = {
  
};

export default Team;