import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import LinkEI from './link-external-internal'
// text-2xl block py-2 pl-3 md:px-3 lg:p-2 leading-snug  text-3xl
const ListItemWithIcon = ({ icon, text, link, className, iconClassName, iconColor }) => {
  const itemClasses = 'text-2xl block py-2 pl-3 md:px-3 lg:p-2 leading-snug ';
  return (
    <li className={`flex items-center ${className}`}>
      {icon&&<span className={cx(iconClassName, {
        [`text-${iconColor}`]: iconColor
      })}>{icon}</span>}
      {link && (
        <LinkEI link={link} className={`hover:underline no-underline ${itemClasses}`}>
          {text}
        </LinkEI>
      )}
      {!link&&<span className={itemClasses}>{text}</span>}
    </li>
  );
};

ListItemWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

ListItemWithIcon.defaultProps = {
  iconClassName: 'text-3xl',
  iconColor: 'primary'
}

export default ListItemWithIcon;
