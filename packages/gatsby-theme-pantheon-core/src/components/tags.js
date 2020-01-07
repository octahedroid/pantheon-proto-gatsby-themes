import React from 'react';
import PropTypes from 'prop-types';
import _isArray from 'lodash/isArray';
import _toLower from 'lodash/toLower';

const Tags = ({tags}) => {
  return tags&&_isArray(tags)&&(
    <div className="container mx-auto py-2 flex flex-wrap lg:py-0">
    <span className="text-primary text-2xl mr-3">Tags: </span>
      {tags.map((tag, i)=>(
        <React.Fragment key={i}>
          <span className="mr-2 text-black text-2xl">{ tag }{ (i + 1 < tags.length) && ',' }</span>
        </React.Fragment>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
};

export default Tags;