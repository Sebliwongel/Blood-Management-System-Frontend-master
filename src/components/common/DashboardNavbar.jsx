import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const DashboardNavbar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow p-4 z-10 w-full">
      {/* Left: Dashboard Text */}
      <div className="flex items-center space-x-2">
        <MdDashboard size={20} />
        <span className="text-lg font-semibold hidden sm:inline">Dashboard</span>
      </div>

      {/* Right: Search bar */}
      <div className="flex items-center w-full sm:w-auto justify-end">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-8 pr-10 py-1 border border-gray-300 rounded-full focus:outline-none w-full"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-500" />
        </div>
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
