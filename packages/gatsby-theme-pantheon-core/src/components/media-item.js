// component with icon or small image align left, title, text and maybe cta

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _isString from 'lodash/isString';
import ImageProvider from './fluid-image-provider';
import Title from './title';
import Paragraph from './paragraph';
import EILink from './link-external-internal'

// flex-row-reverse
const MediaItem = ({reverse, to, children}) => {
  const innerComponent = (
    <div className={cx('flex',{
      'flex-row-reverse': reverse
    })}>
    {children}
    </div>
  );
    return to ? <EILink to={to}>{innerComponent}</EILink>:innerComponent;
};

MediaItem.Column = props => (<div className={cx("p-3", {
  'w-5/12': props.image,
  'w-7/12': !props.image,
})}>{props.children}</div>)
MediaItem.Image = props => (
  <>
    {props.name && <ImageProvider src={props.name} />}
    {props.image && <ImageProvider image={props.image} />}
  </>
)
MediaItem.Title = props => (<Title as="h5" className="font-bold" color="primary">{props.children}</Title>)
MediaItem.Text = props => (<Paragraph className="text-md" {...props}>{props.children}</Paragraph>)

export default MediaItem;