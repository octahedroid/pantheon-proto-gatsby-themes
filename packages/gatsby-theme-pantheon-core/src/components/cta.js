import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import LinkEI from "./link-external-internal";
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
// text-black text-white
const Cta = ({ children, to, type, darkText, className }) => {
  const { theme } = useThemeUI();
  const ctaClasses = cx('py-3 px-4 inline-block text-xl rounded-full hover:bg-secondary hover:text-lightShade hover:shadow-md', className,{
    [`bg-${type}`]:type,
    "text-black": darkText,
    "text-white": !darkText,
  });
  return (
    <LinkEI
      to={to}
      className={ctaClasses}
      sx={{
        transition: theme.transitions.bg
      }}
    >
      {children}
    </LinkEI>
  );
};

Cta.defaultProps = {
  type: "primary"
};

export default Cta;
