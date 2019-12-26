import React from "react";
import PropTypes from "prop-types";
import Disqus from "disqus-react";

const DisqusComment = ({ url, identifier, title }) => {
  const disqusShortname = process.env.DISQUS_ID;
  const disqusConfig = {
    url: `https://ocatahedroid.com${url}`,
    identifier: `https://ocatahedroid.com${identifier}`,
    title
  };
  return (
    <div className="container mx-auto p-3 lg:py-4">
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
};

DisqusComment.propTypes = {};

export default DisqusComment;
