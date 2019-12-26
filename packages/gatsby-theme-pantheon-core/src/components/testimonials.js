// group of testimonial items
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Paragraph from './paragraph';
import Title from './title';
import FluidImage from './fluid-image-provider';

// w-full p-3 lg:w-1/2  lg:w-1/3  lg:w-1/4 lg:w-1/5 lg:w-1/6 lg:w-1/7 lg:w-1/8 lg:w-1/9 lg:w-1/9 lg:w-1/10 lg:w-1/11 lg:w-1/12
const Testimonials = ({ title, columns, items }) => {
  return (
    <div className="container mx-auto py-3">
      {title && <Title as="h2" font="alternative" centered>{title}</Title>}
      <div className="flex flex-wrap items-start justify-center">
        {items &&
          items.map(item => (
            <div className={cx('w-full p-3',{[`lg:w-1/${columns}`]:columns})}>
              <Testimonial
                quote={item.quote}
                name={item.name}
                job={item.job}
                bussiness={item.bussiness}
                avatar={item.avatar}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const Testimonial = ({quote, avatar, name, job, bussiness}) => (
  <div className="flex flex-col justify-center">
    <Paragraph className="text-2xl italic font-serif mb-3">
      {quote}
    </Paragraph>
    <FluidImage src={avatar} className="rounded-full mb-2 w-1/5" />
    <Title as="h5">{name}</Title>
    <Title as="h6">{job} - {bussiness}</Title>
  </div>
)


Testimonials.propTypes = {
  
};
Testimonials.defaultProps = {
  columns: 3
};

export default Testimonials;