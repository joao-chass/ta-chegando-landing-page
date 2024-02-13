"use client";

import { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XCircleIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import style from './Navbar.module.css'
import Image from "next/image";
import logo from '../../../../imagens/logo.png'



export default function Navbar() {
     // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
      ];
  
  return (
    <div className={`flex justify-between items-center h-50 mx-auto px-5 text-black ${style.navBarBody}`} >
      {/* Logo */}
      <Image
      src={logo}
      width={60}
      height={60}
      alt="Logo do app Ta chegando !"
    />



      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#e74862] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <XCircleIcon  /> : <Bars2Icon  />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#faf7d4] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}