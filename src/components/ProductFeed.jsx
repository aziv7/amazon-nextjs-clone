import React from 'react';
import Product from './Product';

const ProductFeed = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductFeed;
