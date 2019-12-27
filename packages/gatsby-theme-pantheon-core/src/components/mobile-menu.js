import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { TiTimes } from "react-icons/ti";
/** @jsx jsx */
import { jsx } from "theme-ui";

const MobileMenu = ({ children, showSidebar, handleShowSidebar }) => {
  return (
    <div
      className="fixed w-full z-30 top-0 right-0 bg-darkShade"
      sx={{
        transition: "right 0.5s",
        right: showSidebar ? "0" : "-100%",
        height: "100vh"
      }}
    >
      <div className="relative flex justify-end p-3 w-full pb-0">
        <button onClick={handleShowSidebar} className="h-3">
          <TiTimes className="text-5xl text-lightShade" />
          <span className="text-darkShade">Close</span>
        </button>
      </div>
      <div className="text-white text-4xl my-4 font-thin ">
        <div className="mx-4">{children}</div>
      </div>
    </div>
  );
};

MobileMenu.Navegation = props => (
  <ul className="list-none pl-0">
    {props.children}
  </ul>
);
MobileMenu.Item = props => <li className="">{props.children}</li>;
MobileMenu.Link = props => (
  <Link className="" to={props.to}>
    {props.children}
  </Link>
);

export default MobileMenu;
