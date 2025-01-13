import React, { useState } from "react";
import {  FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from 'react-icons/fa'; 
// import { useHistory } from 'react-router-dom';

const DashboardNavbar = ({ toggleSidebar }) => {
  //const history = useHistory();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear(); // Or use localStorage.removeItem('key') if you want to remove specific items

    // Redirect to home page (you can change '/home' to the desired URL path)
   // history.push('/'); // Redirect to home page using react-router (if you are using React Router)
    window.location.href = '/';
    // Or, if you don't use React Router, you can use window.location:
    // window.location.href = '/';  // Redirects to the home page
  };
  

  return (
    <nav className="flex items-center justify-between bg-white shadow p-4 z-10 w-full">
      {/* Left: Dashboard Text */}
      <div className="flex items-center space-x-2">
        <MdDashboard size={20} />
        <span className="text-lg font-semibold hidden sm:inline">Dashboard</span>
      </div>

      {/* Right: Logout Button with Icon */}
    <div className="flex items-center w-full sm:w-auto justify-end">
      <button
        onClick={handleLogout}  // Replace with your logout function
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
      >
        <FaSignOutAlt className="mr-2" />  {/* Add the icon */}
        <span>Logout</span>
      </button>
    </div>

      {/* Hamburger Icon (visible on small screens) */}
      <div className="sm:hidden">
        <button onClick={toggleSidebar} className="text-gray-600">
          <FaBars size={24} />
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
