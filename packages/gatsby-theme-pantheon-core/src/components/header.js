import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useThemeUI } from "theme-ui";
import cx from "classnames";
import { TiThMenuOutline } from "react-icons/ti";
/** @jsx jsx */
import { jsx } from "theme-ui";
// shadow fixed w-full z-30 h-nabvar top-0 text-white bg-white
function Header({ scrolled, children }) {
  const { theme } = useThemeUI();

  return (
    <nav
      id="header"
      className={cx(`fixed w-full z-30 h-nabvar top-0 text-white bg-white`, {
        shadow: scrolled
      })}
      sx={{
        transition: theme.transitions.shadow
      }}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 p-3 lg:p-0 ">
        {children}
      </div>
    </nav>
  );
}

Header.Branding = props => {
  return (
      <Link
        className="flex items-center text-primary no-underline hover:no-underline font-bold text-2xl lg:text-3xl text-gray-800 py-2"
        to="/"
      >
        {props.children}
      </Link>
  );
};

Header.Navbar = ({ handleShowSidebar, children }) => {
  return (
    <>
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block bg-white text-black z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {children}
        </ul>
      </div>
      <div className="block lg:hidden flex-shrink ">
        <button onClick={handleShowSidebar}>
          <TiThMenuOutline className="text-5xl text-darkShade p-1 rounded " />
        </button>
      </div>
    </>
  );
};

// font-bold text-secondary border-secondary text-black border-transparent
Header.MenuItem = ({ children, to, active }) => {
  const { theme } = useThemeUI();
  return (
    <li className="mr-3">
      <Link
        className={cx(
          "flex items-center uppercase h-navbar no-underline border-t-4 hover:text-secondary hover:border-secondary py-3 px-1 mx-2",
          {
            "font-bold text-secondary border-secondary": active,
            "text-black border-transparent": !active
          }
        )}
        to={to}
        sx={{
          transition: theme.transitions.color
        }}
      >
        {children}
      </Link>
    </li>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  handleShowSidebar: PropTypes.func,
  navegation: PropTypes.array,
  branding: PropTypes.element
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
