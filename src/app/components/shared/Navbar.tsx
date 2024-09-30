"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed z-50 top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            LetsGo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/destinations" className="hover:text-blue-600">
            Destination
          </Link>
          <Link href="/tour-pages" className="hover:text-blue-600">
            Tour Pages
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>

          {/* Search Field */}
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-600"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <IoMdSearch className="text-xl"/>
            </button>
          </div>

          {/* Book Tour Button */}
          <Link href="/book-tour">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Tour
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </Link>
          <Link
            href="/destination"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Destination
          </Link>
          <Link
            href="/tour-pages"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Tour Pages
          </Link>
          <Link
            href="/blog"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Contact
          </Link>

          {/* Mobile Book Tour Button */}
          <Link href="/book-tour">
            <button className="block py-2 px-4 text-sm bg-blue-600 text-white text-center">
              Book Tour
            </button>
          </Link>

          {/* Mobile Search Field */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-600"
                placeholder="Search..."
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                🔍
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
