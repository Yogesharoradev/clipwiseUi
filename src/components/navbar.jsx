import React from 'react';
import { BsBagDashFill, BsSquareHalf } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { GoTriangleLeft } from 'react-icons/go';
import { PiRectangle } from 'react-icons/pi';

const Navbar = () => {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "AboutUs", href: "/about" },
    { name: "Help", href: "/help" },
  ];

  return (
    <nav className="bg-gradient-to-r from-cyan-300 via-pink-300 via-25% to-cyan-500 p-8 z-10">
      <div className="container mx-auto flex justify-between items-center">

        <div className='flex items-center gap-3'>
        <div className='border-white border-2 w-10 h-20 rounded-full text-center items-center flex'>
            <GoTriangleLeft className='text-white'/>
            <BsSquareHalf className='text-white'/>
            <PiRectangle className='text-white'/>
        </div>
        <a href="/" className="text-white font-semiBold  text-xl">
        Pop Rock Crystal
        </a>
        </div>

        <div className='flex gap-10 justify-between items-center'>
        <div className='mr-40 '>
        <ul className="flex space-x-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                to={link.href} 
                className="text-white font-semibold hover:text-gray-300" >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        </div>

        <div className='flex items-center gap-3'>
          <FaDiscord  className=' text-red-600 h-5 w-5'/>
          <BsBagDashFill  className='text-white h-6 w-6'/>

        </div>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;
