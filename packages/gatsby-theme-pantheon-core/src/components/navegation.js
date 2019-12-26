// horizontal navbar with center , left or right align accept items and a bg color
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import EILink from './link-external-internal';

// bg-primary bg-secondary bg-white bg-darkShade bg-lightShade bg-accent justify-center justify-start justify-end block p-1 py-2
const Navegation = ({left, right, center, items, bg, itemClassName}) => {
  return (
    <div className={cx('flex p-2', {
      [`bg-${bg}`]: bg
    })}>
      <ul className={cx("flex flex-shrink list-reset container mx-auto", {
      'justify-center': center,
      'justify-start': left,
      'justify-end': right,
      })}>
        {items&&items.map(item=>(
          <li className="px-2"><EILink link={item.route} className={cx('block p-1 py-2', itemClassName)}>{item.name}</EILink></li>
        ))}
      </ul>
    </div>
  );
};

Navegation.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
};

Navegation.defaultProps = {
  left: true,
  itemClassName: 'text-secondary',
  bg: 'lightShade'
};

export default Navegation;