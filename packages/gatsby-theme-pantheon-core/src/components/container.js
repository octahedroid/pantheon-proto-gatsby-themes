// container with flex prop
import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  return (
    <div className={`container mx-auto`}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  flex: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default Container;