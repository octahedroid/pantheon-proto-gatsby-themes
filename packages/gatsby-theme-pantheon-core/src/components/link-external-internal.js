import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LinkExternalInternal = ({ link, className, children }) => {
  const isExternal = link.startsWith("/");
  return (
    <>
      {link && !isExternal && (
        <a href={link} className={className}>
          {children}
        </a>
      )}
      {link && isExternal && (
        <Link to={link} className={className}>
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
