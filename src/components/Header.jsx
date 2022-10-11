import Image from 'next/image';
import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <header>
      <div className='flex items-center p-1 flex-grow py-2 bg-amazon_blue'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            className='cursor-pointer'
            objectFit='contain'
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            alt='Amazon'
          />
        </div>
        <div className='hidden flex-grow cursor-pointer rounded-md h-9 sm:flex items-center  bg-yellow-400 hover:bg-yellow-500 '>
          <input
            className='p-2 h-full w-6 flex-grow outline-none rounded-l-md flex-shrink px-4'
            type='text'
            placeholder='Search products'
          />

          <SearchIcon className='h-12 p-4' />
        </div>

        <div className='flex items-center text-sm space-x-5 mx-8 whitespace-nowrap text-white'>
          <div className='link'>
            <p>Hello there</p>
            <p>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns & Orders</p>
          </div>
          <div className='link'>
            <ShoppingCartIcon className='h-10' />
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;