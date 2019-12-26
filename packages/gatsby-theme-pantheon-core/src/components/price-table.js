import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product-item';
import Title from './title';
const PriceTable = ({ title, columns, items }) => {
  return (
    <div className="container mx-auto py-3">
      {title && <Title as="h2" font="alternative" centered>{title}</Title>}
      <div className="flex flex-wrap items-center mt-4">
        {items &&
          items.map(product => (
            <div className={`w-full lg:w-1/${columns}`}>
              <ProductItem
                name={product.name}
                value={product.value}
                currency={product.currency}
                features={product.features}
                ctaText={product.ctaText}
                link={product.link}
                featured={product.featured}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

PriceTable.propTypes = {
  
};

export default PriceTable;