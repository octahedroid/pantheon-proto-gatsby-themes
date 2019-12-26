// component with icon or small image align left, title, text and maybe cta

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _isString from 'lodash/isString';
import FluidImage from './fluid-image-provider';
import Title from './title';
import Paragraph from './paragraph';
import EILink from './link-external-internal'

// flex-row-reverse
const MediaItem = ({reverse, image, title, content, link}) => {
  const component = (
    <div className={cx('flex',{
      'flex-row-reverse': reverse
    })}>
      <div className="w-3/12 p-3">
        {_isString(image)&&<FluidImage src={image} />}
        {!_isString(image)&&{image}}
      </div>
      <div className="w-9/12 p-3">
        <Title as="h5" className="font-bold" color="primary">{title}</Title>
        <Paragraph className="text-md">{content}</Paragraph>
      </div>
    </div>
  );
    return link ? <EILink link={link}>{component}</EILink>:component;

};

MediaItem.propTypes = {
  reverse: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  title: PropTypes.string,
  content: PropTypes.string,
};

export default MediaItem;