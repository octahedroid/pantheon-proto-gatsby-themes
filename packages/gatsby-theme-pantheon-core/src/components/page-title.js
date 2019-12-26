// intro, title in full-width in container

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IntroText from './intro-text';
import Title from './title';

// leading-tight text-center
const PageTitle = ({intro, title, centered}) => {
  return (
    <div className={cx("flex flex-col justify-start ", {'items-center':centered})}>
      {intro&&<IntroText >{intro}</IntroText>}
      {title&&<Title as="h1" className={cx("leading-tight",{'text-center':centered})} >{title}</Title>}
    </div>
  );
};

PageTitle.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string,
};

export default PageTitle;