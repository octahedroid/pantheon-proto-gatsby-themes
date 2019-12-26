import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Title from './title';
import List from './list';
import Cta from './cta';

// mx-3 rounded shadow my-2 shadow-lg bg-primary p-3 text-center font-bold border-b-2 border-lightShade text-primary text-secondary text-white lg:px-4
const ProductItem = ({name, value, currency, features, ctaText, link, featured}) => {
  return (
    <div className={cx(" mx-3 rounded", {
      'shadow my-2': !featured,
      'shadow-lg bg-primary': featured
    })}>
      <Title as="h5" className={cx("p-3 text-center font-bold border-b-2 border-lightShade", {
        "text-primary": !featured,
        "text-secondary": featured
      })} >{name}</Title>
      <div className={cx("flex flex-wrap justify-center items-center py-3 border-b-2 ", {
        'text-secondary border-lightShade': !featured,
        'text-darkShade border-lightShade': featured
      })}>
        <h2 className={cx("inline text-6xl font-bold mr-2 font-alternative")}>{value}</h2><span className="inline">{currency}</span>
      </div>
      <List 
        className={cx("lg:px-4", {
          'text-white': featured
        })}
        items={features}
        columns={1}
      />
      <div className="px-4 py-2 pb-4">
        <Cta className="w-full text-center" text={ctaText} link={link} type={featured?'secondary':'accent'} darkText={!featured} />
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  
};

export default ProductItem;