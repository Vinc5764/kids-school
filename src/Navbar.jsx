/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import logo from './assets/blue.png';
import direction from './assets/direction.svg';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 ?? window.scrollY < 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsSticky]);

  return (
    <header className="fixed left-0 right-0 top-0 w-full lg:z-[1000]">
      <nav
        className={`bg-transparent px-4 py-4 md:px-12 ${
          isSticky ? 'sticky left-0 right-0 top-0 bg-white ' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="lg:ml-[-2.98rem] lg:mt-[-1rem]">
            <img
              src={logo}
              alt=""
              className="h-[7rem] w-[4rem] lg:h-[7rem] lg:w-[4rem]"
            />
          </div>

          <div className="hidden leading-8 lg:block">
            <h1 className="font-bold text-[#252B42]">Brandname</h1>
          </div>

          {/* for larger device */}
          <div className="text-body hidden items-center gap-3 lg:flex">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block cursor-pointer px-4 py-2 text-primary hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Product"
              className="block cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Product
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Pricing"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Contact"
              className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
            >
              Contact
            </Link>
          </div>

          {/* contact me btn */}
          <div className="mr-24 hidden lg:block">
            <button className=" mr-4 bg-transparent  px-4 py-2 text-primary transition-all duration-300 hover:rounded-md hover:border hover:bg-primary hover:text-white">
              Login
            </button>
            <button className="duration-30 inline-flex rounded border border-primary bg-primary px-4  py-2 text-white transition-all hover:bg-primary">
              <p>JOIN US</p>
              <img src={direction} alt="arrow" className="pl-2 pt-2" />
            </button>
          </div>

          {/* btn for small devices */}
          <button
            onClick={toggleMenu}
            className="text-body text-3xl lg:hidden "
          >
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 rounded-lg bg-secondary p-4 text-white hover:cursor-pointer">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block py-2 hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Product"
              className="block py-2 hover:text-gray-400"
            >
              Product
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Pricing"
              className="block py-2 hover:text-gray-400"
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="Contact"
              className="block py-2 hover:text-gray-400"
            >
              Contact
            </Link>

            <div className="">
              <button className="ml-[-1rem] rounded border border-none bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:text-white">
                Login
              </button>
            </div>
            <div className="pt-4">
              <button className="ml-[-0.5rem] rounded border border-primary bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary hover:text-white">
                JOIN US
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
