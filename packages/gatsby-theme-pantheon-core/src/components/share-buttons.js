import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton
} from 'react-share';
import { FaFacebook, FaTwitter, FaLinkedin, FaReddit, FaWhatsappSquare } from "react-icons/fa";
const propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.string,
  tags: PropTypes.array
};
const defaultProps = {
  handler: process.env.TWITTER_HANDLER,
  tags: []
};

function Share({
  url, title, handler, tags
}) {
  return (
    <div className="container mx-auto p-3 lg:px-0 lg:py-0">
      <div className="flex flex-wrap items-center">
        <p className="text-primary text-2xl text-alternative mr-3 py-2">Share: </p>
        <FacebookShareButton url={url} className="text-2xl flex items-center mx-2 p-2 text-darkShade hover:text-secondary">
          <FaFacebook />
        </FacebookShareButton>
        <TwitterShareButton url={url} className="text-2xl flex items-center mx-2 p-2 text-darkShade hover:text-secondary" title={title} via={handler} hashtags={tags}>
          <FaTwitter />
        </TwitterShareButton>
        <LinkedinShareButton url={url} className="text-2xl flex items-center mx-2 p-2 text-darkShade hover:text-secondary" title={title}>
          <FaLinkedin />
        </LinkedinShareButton>
        <RedditShareButton url={url} className="text-2xl flex items-center mx-2 p-2 text-darkShade hover:text-secondary" title={title}>
          <FaReddit />
        </RedditShareButton>
        <WhatsappShareButton url={url} className="text-2xl flex items-center mx-2 p-2 text-darkShade hover:text-secondary" title={title}>
          <FaWhatsappSquare />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

Share.propTypes = propTypes;
Share.defaultProps = defaultProps;

export default Share;
