import React from 'react';
import Title from './title'
import Paragraph from './paragraph';

const components = {
  h1: (props)=><Title as='h1' {...props} />,
  h2: (props)=><Title as='h2' {...props} />,
  h3: (props)=><Title as='h3' {...props} />,
  h4: (props)=><Title as='h4' {...props} />,
  h5: (props)=><Title as='h5' {...props} />,
  h6: (props)=><Title as='h6' {...props} />,
  p: (props)=><Paragraph {...props} />,
}
export default components