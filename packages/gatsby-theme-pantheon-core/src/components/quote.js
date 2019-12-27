import React from 'react';
import Paragraph from '../components/paragraph';
import Title from '../components/title';

const Quote = (props) => {
  return (
    <blockquote className="p-3 pl-4 border-l-4 border-darkShade">
      {props.children}
    </blockquote>
  );
};
Quote.Text = props => (<Paragraph className="italic text-2xl text-secondary pb-3 font-serif">{props.children}</Paragraph>);
Quote.Author = props => (<Title as="h4" className="text-gray-600">{props.children}</Title>);
export default Quote;