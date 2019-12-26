// paragraph con styles de theme-ui
import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from 'theme-ui'

const paragraph = (props) => {
  return (<>
    {!props.className&&<Styled.p {...props}>{props.children}</Styled.p>}
    {props.className&&<p {...props}>{props.children}</p>}
    </>
  );
};

paragraph.propTypes = {
  
};

export default paragraph;