import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = ({items}) => {
  return (
    <ul className="list-reset flex justify-center lg:justify-start text-4xl text-lightShade">
      {items&&items.map(network=>(<li className="mr-3">
        <a
          href={network.link}
          rel="noopener noreferer"
        >
          {network.icon}
        </a>
      </li>))}
    </ul>
  );
};

SocialLinks.propTypes = {
  
};

export default SocialLinks;