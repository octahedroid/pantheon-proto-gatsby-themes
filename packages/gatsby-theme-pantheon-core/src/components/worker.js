// the item for teams
import React from 'react';
import PropTypes from 'prop-types';
import FluidImage from './fluid-image-provider';
import Title from './title';

const Worker = ({avatar, name, job}) => {
  return (
    <div className="flex flex-col justify-center rounded shadow">
      <FluidImage src={avatar} className=" mb-2 w-full" />
      <Title as="h4" className="px-3 py-2">{name}</Title>
      <Title as="h6" className="px-3 py-0 pb-3 text-secondary">{job}</Title>
    </div>
  );
};

Worker.propTypes = {
  
};

export default Worker;