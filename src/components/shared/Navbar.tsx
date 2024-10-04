"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle between light/dark theme
    document.documentElement.classList.toggle("dark");
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    // Logic to change language (e.g., i18n)
  };

  return (
    <nav
      className={
        "w-full fixed z-[1000] top-0 transition-all duration-300  dark:bg-gray-800 dark:text-white bg-white text-black shadow-md"
      }
    >
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
          <Link href="/tour-list" className="hover:text-blue-600">
            Tour List
          </Link>
          <Link href="/hotel-booking" className="hover:text-blue-600">
            Room
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
              <IoMdSearch className="text-xl" />
            </button>
          </div>

          {/* Book Tour Button */}
          <Link href="/tour-list">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-red-400 dark:hover:bg-red-500">
              Book Tour
            </button>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center space-x-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaGlobe />
              <span>{language}</span>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg border rounded-md">
                <button
                  onClick={() => changeLanguage("EN")}
                  className="block w-full px-4 py-2 hover:bg-gray-100"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("ES")}
                  className="block w-full px-4 py-2 hover:bg-gray-100"
                >
                  ES
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? (
              <FiSun className="text-xl" />
            ) : (
              <FiMoon className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <Link
            href="/"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Destination
          </Link>
          <Link
            href="/tour-pages"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Tour Pages
          </Link>
          <Link
            href="/blog"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact
          </Link>

          {/* Mobile Book Tour Button */}
          <Link href="/book-tour">
            <button className="block py-2 px-4 text-sm bg-blue-600 text-white text-center hover:bg-blue-700 dark:bg-red-400">
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
                <IoMdSearch className="text-xl" />
              </button>
            </div>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex justify-between items-center p-4">
            <span>Theme</span>
            <button onClick={toggleTheme} className="focus:outline-none">
              {isDarkMode ? (
                <FiSun className="text-xl" />
              ) : (
                <FiMoon className="text-xl" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
