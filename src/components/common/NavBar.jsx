import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/image copy.png";
import SearchBar from "./Search";

function NavBar() {
  return (
    <div className="bg-red-100 shadow-md w-full fixed top-0 left-0 z-50 border border-white flex flex-col md:flex-row items-center justify-between p-2 px-16">
      <img src={logo} alt="Logo" className="h-14" />

      <div className="text-black text-sx ml-52 flex flex-wrap font-semibold space-x-4 items-center justify-center mt-2 md:mt-0">
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
      <div className="flex space-x-2 border-black">
        <div className="relative ">
          <SearchBar />
        </div>
        <Link to="/login">
          <button className="p-2 w-20 text-md rounded-md bg-white border hover:bg-red-50 border-red-300">
            Log In
          </button>
        </Link>

        <Link to="/registration">
          <button className="p-2 w-20 text-md rounded-md bg-red-600 hover:bg-red-900 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
