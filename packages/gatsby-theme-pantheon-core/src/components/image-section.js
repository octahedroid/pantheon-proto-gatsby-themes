// intro, title, desc, big image full width
import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './page-title';
import _isString from 'lodash/isString';
import cx from 'classnames'
import FluidImage from './fluid-image-provider';

const ImageSection = ({intro, title, image, centered, imageClassName}) => {
  return (
    <div className={cx('flex flex-col container mx-auto my-2', {'items-center':centered})}>
      <PageTitle intro={intro} title={title} centered={centered} />
      {_isString(image)&&<FluidImage src={image} className={imageClassName} />}
      {!_isString(image)&&{image}}
    </div>
  );
};

ImageSection.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
  centered: PropTypes.bool,
  imageClassname: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};
ImageSection.defaultProps={
  imageClassName:"w-full"
}
export default ImageSection;