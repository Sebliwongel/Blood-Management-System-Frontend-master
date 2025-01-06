import React, { useState } from "react";
import PropTypes from "prop-types";
import DashboardNavbar from "../../components/common/DashboardNavbar";
import Sidebar from "../../components/common/Sidebar";

const DashboardLayout = ({ sidebarItems, components }) => {
  const [activeTab, setActiveTab] = useState(sidebarItems[0]?.name || "");
  const [sidebarOpen, setSidebarOpen] = useState(true); // Track sidebar state

  const handleSidebarClick = (item) => {
    if (item.action) {
      item.action();
    }
    setActiveTab(item.name);
  };

  const sidebarItemsWithDisplay = sidebarItems.map((item) => ({
    ...item,
    displayName: item.displayName || item.name,
  }));

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <DashboardNavbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-white shadow-md transition-all duration-300 ease-in-out sm:w-64 sm:block`}
        >
          <Sidebar
            items={sidebarItemsWithDisplay}
            activeItem={activeTab}
            onItemClick={handleSidebarClick}
            sidebarOpen={sidebarOpen}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          {components[activeTab] && React.createElement(components[activeTab])}
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string,
      icon: PropTypes.elementType.isRequired,
      action: PropTypes.func,
    })
  ).isRequired,
  components: PropTypes.objectOf(PropTypes.elementType).isRequired,
};

export default DashboardLayout;
