import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import { useThemeUI } from "theme-ui";
import cx from 'classnames'

const Navbar = ({navegation}) => {
  return (
    <ul className="list-reset lg:flex justify-end flex-1 items-center">
      {navegation &&
        navegation.map(item => (
          <MenuItem
            name={item.name}
            route={item.route}
            active={item.active}
          />
        ))}
    </ul>
  );
};

Navbar.propTypes = {
  navegation: PropTypes.array,
};

export default Navbar;

// font-bold text-secondary border-secondary text-black border-transparent
const MenuItem = ({ name, route, active }) => {
  const { theme } = useThemeUI();
  return (
    <li className="mr-3">
      <Link
        className={cx('flex items-center uppercase h-navbar no-underline border-t-4 hover:text-secondary hover:border-secondary py-3 px-1 mx-2',
        {
          "font-bold text-secondary border-secondary": active,
          "text-black border-transparent": !active
        })}
        to={route}
        sx={{
          transition: theme.transitions.color
        }}
      >
        {name}
      </Link>
    </li>
  );
};