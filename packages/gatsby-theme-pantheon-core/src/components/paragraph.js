// paragraph con styles de theme-ui
import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from 'theme-ui'

const paragraph = (props) => {
  const isString = typeof props.children === 'string' || props.children instanceof String
  return (<>
    {isString && <div dangerouslySetInnerHTML={{ __html: props.children }}/>}
    {!props.className&& !isString&&<Styled.p {...props}>{props.children}</Styled.p>}
    {props.className && !isString&&<p {...props}>
      {props.children}
    </p>}
    </>
  );
};

paragraph.propTypes = {
  
};

export default paragraph;