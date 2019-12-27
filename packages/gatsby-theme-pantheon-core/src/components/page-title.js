// intro, title in full-width in container

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IntroText from './intro-text';
import Title from './title';

// leading-tight text-center
const PageTitle = ({children, centered}) => {
  return (
    <div className={cx("flex flex-col justify-start ", {'items-center':centered})}>
      {children}
    </div>
  );
};
PageTitle.Intro = props =>(<IntroText >{props.children}</IntroText>);
PageTitle.Title = props =>(<Title as="h1" className={cx("leading-tight",{'text-center':props.centered})} >{props.children}</Title>);


export default PageTitle;