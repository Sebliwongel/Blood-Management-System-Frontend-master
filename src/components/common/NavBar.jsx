import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/image copy.png";
import SearchBar from "./Search";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the sidebar when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-red-100 shadow-md w-full fixed top-0 left-0 z-50 border border-white flex flex-col md:flex-row items-center justify-between p-2 px-4 md:px-16">
      {/* Logo and Hamburger Icon */}
      <div className="w-full md:w-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-14" />
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-100 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col text-black text-sm font-semibold space-y-4 p-4">
          <a
            className="hover:text-red-600"
            href="/#home"
            onClick={handleMenuItemClick}
          >
            Home
          </a>
          <a
            className="hover:text-red-600"
            href="/#contact-us"
            onClick={handleMenuItemClick}
          >
            About
          </a>
          <a
            className="hover:text-red-600"
            href="/#blood"
            onClick={handleMenuItemClick}
          >
            Blood
          </a>
          <a
            className="hover:text-red-600"
            href="/#contact-us"
            onClick={handleMenuItemClick}
          >
            Contact Us
          </a>
          <a
            className="hover:text-red-600"
            href="/awareness"
            onClick={handleMenuItemClick}
          >
            Awareness
          </a>
        </div>

        {/* Login and Sign Up Buttons for Mobile */}
        <div className="flex flex-col space-y-2 p-4">
          <Link to="/login" onClick={handleMenuItemClick}>
            <button className="p-2 w-full text-md rounded-md bg-white border hover:bg-red-50 border-red-300">
              Log In
            </button>
          </Link>
          <Link to="/registration" onClick={handleMenuItemClick}>
            <button className="p-2 w-full text-md rounded-md bg-red-600 hover:bg-red-900 text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row text-black text-base font-semibold space-x-4 items-center">
        <a className="hover:text-red-600" href="/#home">
          Home
        </a>
        <a className="hover:text-red-600" href="/#contact-us">
          About
        </a>
        <a className="hover:text-red-600" href="/#blood">
          Blood
        </a>
        <a className="hover:text-red-600" href="/#contact-us">
          Contact Us
        </a>
        <a className="hover:text-red-600" href="/awareness">
          Awareness
        </a>
      </div>

      {/* Search and Auth Buttons for Desktop */}
      <div className="hidden md:flex space-x -2 border-black">
        <div className="relative">
          <SearchBar />
        </div>
        <Link to="/login">
          <button className="p-2 m-1 w-20 text-md rounded-md bg-white border hover:bg-red-50 border-red-300" >
            Log In
          </button>
        </Link>
        <Link to="/registration">
          <button className="p-2 m-1 w-20 text-md rounded-md bg-red-600 hover:bg-red-900 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;