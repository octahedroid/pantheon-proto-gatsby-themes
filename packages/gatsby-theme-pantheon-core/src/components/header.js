import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useThemeUI } from "theme-ui";
import { TiThMenuOutline } from "react-icons/ti";
/** @jsx jsx */
import { jsx } from "theme-ui";
// shadow fixed w-full z-30 h-nabvar top-0 text-white bg-white
function Header({ scrolled, handleShowSidebar, navegation, branding }) {
  const { theme } = useThemeUI();

  return (
    <nav
      id="header"
      className={`fixed w-full z-30 h-nabvar top-0 text-white bg-white ${
        scrolled ? "shadow" : ""
      }`}
      sx={{
        transition: theme.transitions.shadow
      }}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 p-3 lg:p-0 ">
        <div className="flex items-center">
          <Link
            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-3xl text-gray-800 py-2"
            to="/"
          >
            {branding}
          </Link>
        </div>

        {navegation && (
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block bg-white text-black z-20"
            id="nav-content"
          >
            {navegation}
          </div>
        )}
        <div className="block lg:hidden flex-shrink ">
          <button onClick={handleShowSidebar}>
            <TiThMenuOutline className="text-5xl text-darkShade p-1 rounded " />
          </button>
        </div>
      </div>
    </nav>
  );
}

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
