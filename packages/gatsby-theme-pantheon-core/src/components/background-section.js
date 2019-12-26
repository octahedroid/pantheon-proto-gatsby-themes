// component with bg image, title, subtitle
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import FluidImage from './fluid-image-provider'

// max-h-hero h-hero max-h-screen h-screen container mx-auto h-hero h-screen
const BackgroundSection = ({container, hero, screen, image, imageClassName, containerClassName, children}) => {
  return (
    <div className={cx(containerClassName, {'max-h-hero h-hero': hero, 'max-h-screen h-screen': screen})}
    >
      <FluidImage src={image} asBackground className={cx(imageClassName, {'h-hero':hero, 'h-screen': screen})} >
        <div className={cx('flex items-center', {'container mx-auto': container, 'h-hero': hero, 'h-screen': screen})}>
          {children}
        </div>
      </FluidImage>
    </div>
  );
};

BackgroundSection.propTypes = {
  container: PropTypes.bool,
  image: PropTypes.string,
  bgPosition: PropTypes.string,
  hero: PropTypes.bool,
  screen: PropTypes.bool,
};

BackgroundSection.defaultProps = {
};

export default BackgroundSection;