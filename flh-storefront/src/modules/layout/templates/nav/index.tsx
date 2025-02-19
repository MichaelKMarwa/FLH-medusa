// flh-storefront/src/modules/layout/templates/nav/index.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlus, FaSearch, FaHeart, FaShoppingBag, FaMoon, FaSun } from 'react-icons/fa';
import CartButton from '@modules/layout/components/cart-button';

const Nav = () => {
  const [isHomeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    switch (dropdown) {
      case 'home':
        setHomeDropdownOpen(!isHomeDropdownOpen);
        setPagesDropdownOpen(false);
        setShopDropdownOpen(false);
        setBlogDropdownOpen(false);
        break;
      case 'pages':
        setPagesDropdownOpen(!isPagesDropdownOpen);
        setHomeDropdownOpen(false);
        setShopDropdownOpen(false);
        setBlogDropdownOpen(false);
        break;
      case 'shop':
        setShopDropdownOpen(!isShopDropdownOpen);
        setHomeDropdownOpen(false);
        setPagesDropdownOpen(false);
        setBlogDropdownOpen(false);
        break;
      case 'blog':
        setBlogDropdownOpen(!isBlogDropdownOpen);
        setHomeDropdownOpen(false);
        setPagesDropdownOpen(false);
        setShopDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`flex justify-between items-center p-4 bg-gray-800 text-white ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src="/path-to-logo.png" alt="Furnixar Logo" width={50} height={50} />
            <span className="ml-2 text-xl font-bold">Furnixar</span>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <div className="relative group">
          <button onClick={() => toggleDropdown('home')} className="flex items-center">
            Home <FaPlus className="ml-1" />
          </button>
          {isHomeDropdownOpen && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-md z-10">
              <Link href="/about" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</div>
              </Link>
              <Link href="/services" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Services</div>
              </Link>
              <Link href="/faq" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">FAQ</div>
              </Link>
            </div>
          )}
        </div>
        <div className="relative group">
          <button onClick={() => toggleDropdown('pages')} className="flex items-center">
            Pages <FaPlus className="ml-1" />
          </button>
          {isPagesDropdownOpen && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-md z-10">
              <Link href="/contact" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</div>
              </Link>
              <Link href="/terms" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Terms & Conditions</div>
              </Link>
              <Link href="/privacy" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Privacy Policy</div>
              </Link>
            </div>
          )}
        </div>
        <div className="relative group">
          <button onClick={() => toggleDropdown('shop')} className="flex items-center">
            Shop <FaPlus className="ml-1" />
          </button>
          {isShopDropdownOpen && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-md z-10">
              <Link href="/categories/living-room" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Living Room</div>
              </Link>
              <Link href="/categories/bedroom" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bedroom</div>
              </Link>
              <Link href="/categories/kitchen" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kitchen</div>
              </Link>
            </div>
          )}
        </div>
        <div className="relative group">
          <button onClick={() => toggleDropdown('blog')} className="flex items-center">
            Blog <FaPlus className="ml-1" />
          </button>
          {isBlogDropdownOpen && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-md z-10">
              <Link href="/blog" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">All Posts</div>
              </Link>
              <Link href="/blog/category/tips" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Tips</div>
              </Link>
              <Link href="/blog/category/reviews" passHref>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Reviews</div>
              </Link>
            </div>
          )}
        </div>
        <Link href="/contact" passHref>
          <div className="cursor-pointer">Contact</div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <button>
          <FaSearch />
        </button>
        <button>
          <FaHeart />
          <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 -right-1">14</span>
        </button>
        <CartButton />
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;