// horizontal navbar with center , left or right align accept items and a bg color
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import EILink from './link-external-internal';

// bg-primary bg-secondary bg-white bg-darkShade bg-lightShade bg-accent justify-center justify-start justify-end block p-1 py-2
const Footer = (props) => {
  return (
    <div className={cx('flex p-2', {
      [`bg-${props.bg}`]: props.bg
    })}>
      {props.children}
    </div>
  );
};
Footer.Navegation = ({left, right, center, children}) => (<ul className={cx("flex flex-shrink list-reset container mx-auto", {
  'justify-center': center,
  'justify-start': left,
  'justify-end': right,
  })}>
    {children}
  </ul>)
Footer.Item = props => (<li className="px-2">{props.children}</li>)
Footer.Link = props => (<EILink to={props.to} className={cx('block p-1 py-2', props.className)}>{props.children}</EILink>)


export default Footer;