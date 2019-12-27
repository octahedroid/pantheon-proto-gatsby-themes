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
const MediaItem = ({reverse, to}) => {
  const innerComponent = (
    <div className={cx('flex',{
      'flex-row-reverse': reverse
    })}>
    {props.children}
    </div>
  );
    return to ? <EILink to={to}>{innerComponent}</EILink>:innerComponent;

};

MediaItem.Column = props => (<div className={cx("p-3", {
  'w-3/12': !props.image,
  'w-9/12': props.image,
})}>{props.children}</div>)
MediaItem.Image = props => (<FluidImage src={props.name} />)
MediaItem.Title = props => (<Title as="h5" className="font-bold" color="primary">{props.children}</Title>)
MediaItem.Text = props => (<Paragraph className="text-md">{props.children}</Paragraph>)

export default MediaItem;