import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';

const Product = ({ product }) => {
  const [rate] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  const [prime] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1 == 4);

  const { id, category, description, image, price, rating, title } = product;
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='italic text-sm text-gray-400 absolute right-2 top-2'>
        {category}{' '}
      </p>

      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4 className='my-3'>{title} </h4>
      <div className='flex space-x-2'>
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='text-yellow-400 h-5' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description} </p>
      <div className='mb-5'>
        <CurrencyFormat prefix={'$'} displayType={'text'} value={price} />
      </div>
      {prime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='https://links.papareact.com/fdw' alt='' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button className=' mt-auto button '>Add to Basket</button>
    </div>
  );
};

export default Product;
