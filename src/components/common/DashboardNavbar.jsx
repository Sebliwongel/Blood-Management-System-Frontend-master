// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";

const DashboardNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", e.target.value); // Example: log the query
    // You can implement additional logic here, like calling a search API
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow p-4 z-10 w-full pr-72">
      {/* Left: Dashboard Text */}
      <div className="flex items-center space-x-2">
        <MdDashboard size={20} />
        <FaRegStar size={20} />
        <span>
          <span>Dashboards</span>
        </span>
      </div>

      {/* Right: Search bar */}
      <div className="flex items-center ml-auto space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange} // Attach the handler
            className="pl-8 pr-10 py-1 border border-gray-300 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-500" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
