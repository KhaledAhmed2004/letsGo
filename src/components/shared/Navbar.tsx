"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const pathname = usePathname(); // Get current pathname

  // const isActive = (path) => pathname === path;
  const isActive = (path: string): boolean => pathname === path;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    // Logic to change language (e.g., i18n)
  };

  return (
    <nav
      className={
        "w-full fixed z-[1000] top-0 transition-all duration-300 bg-white dark:bg-gray-900 dark:text-white shadow-md"
      }
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold dark:text-white">
            LetsGo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`${
              isActive("/")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className={`${
              isActive("/destinations")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Destination
          </Link>
          <Link
            href="/tour-list"
            className={`${
              isActive("/tour-list")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Tour List
          </Link>
          <Link
            href="/hotel-booking"
            className={`${
              isActive("/hotel-booking")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Room
          </Link>
          <Link
            href="/blog"
            className={`${
              isActive("/blog")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/package-management"
            className={`${
              isActive("/package-management")
                ? "bg-blue-600 dark:bg-gray-700 text-white px-4 py-2 rounded-md font-bold"
                : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-100"
            }`}
          >
            Dashboard
          </Link>

          {/* Search Field */}
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md py-1 px-3 focus:outline-none focus:border-blue-600 dark:focus:border-gray-400"
              placeholder="Search..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
              <IoMdSearch className="text-xl" />
            </button>
          </div>

          {/* Book Tour Button */}
          <Link href="/tour-list">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600">
              Book Tour
            </button>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaGlobe />
              <span>{language}</span>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 rounded-md">
                <button
                  onClick={() => changeLanguage("EN")}
                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("ES")}
                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ES
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? (
              <FiSun className="text-xl dark:text-gray-300" />
            ) : (
              <FiMoon className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none dark:text-gray-300"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <Link
            href="/"
            className={`block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive("/") ? "font-bold text-white bg-blue-600 rounded-md" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className={`block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive("/destinations")
                ? "font-bold text-white bg-blue-600 rounded-md"
                : ""
            }`}
          >
            Destination
          </Link>
          <Link
            href="/tour-list"
            className={`block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive("/tour-list")
                ? "font-bold text-white bg-blue-600 rounded-md"
                : ""
            }`}
          >
            Tour List
          </Link>
          <Link
            href="/hotel-booking"
            className={`block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive("/hotel-booking")
                ? "font-bold text-white bg-blue-600 rounded-md"
                : ""
            }`}
          >
            Room
          </Link>
          <Link
            href="/blog"
            className={`block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive("/blog")
                ? "font-bold text-white bg-blue-600 rounded-md"
                : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive("/contact")
                ? "font-bold text-white bg-blue-600 rounded-md"
                : ""
            }`}
          >
            Contact
          </Link>

          {/* Mobile Book Tour Button */}
          <Link href="/book-tour">
            <button className="block py-2 px-4 text-sm bg-blue-600 text-white w-full rounded-md hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600">
              Book Tour
            </button>
          </Link>

          {/* Mobile Theme Toggle */}
          <div className="w-full p-4 flex justify-end">
            <button onClick={toggleTheme} className="focus:outline-none">
              {isDarkMode ? (
                <FiSun className="text-xl dark:text-gray-300" />
              ) : (
                <FiMoon className="text-xl dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
