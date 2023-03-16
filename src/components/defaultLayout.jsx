import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='font-montserrat'>
      <div className='flex justify-between max-w-[1240px] mx-auto px-4 items-center h-24 text-white'>
        <h1 className='w-full text-3xl font-bold'>
          <span className=' text-amber-500'>ARC</span>ANA
        </h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>
            <a href='/home#hero'>Home</a>
          </li>
          <li className='p-4'>
            <a href='#about'>About</a>
          </li>
          <li className='p-4'>
            <a href='#plans'>Plans</a>
          </li>
          <li className='p-4'>
            <Link to='/download-app'>Download</Link>
          </li>
          <li className='p-4'>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <button className='bg-amber-500 text-black rounded w-[120px] h-[50px] font-bold'>
              <Link to='/login'>Sign In</Link>
            </button>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? ' lg:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-zinc-800 text-white ease-in-out duration-500 z-50'
              : 'fixed left-[-100%] '
          }
        >
          <h1 className='w-full text-3xl font-bold m-4'>
            <span className=' text-amber-500'>ARC</span>ANA
          </h1>

          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Plans</li>
            <li className='p-4 border-b border-gray-600'>Download</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
