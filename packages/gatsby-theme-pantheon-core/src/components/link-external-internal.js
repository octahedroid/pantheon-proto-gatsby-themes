import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LinkExternalInternal = ({ to, className, children }) => {
  const isExternal = to.startsWith("/");
  return (
    <>
      {to && !isExternal && (
        <a href={to} className={className}>
          {children}
        </a>
      )}
      {to && isExternal && (
        <Link to={to} className={className}>
          {children}
        </Link>
      )}
    </>
  );
};

LinkExternalInternal.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkExternalInternal;
