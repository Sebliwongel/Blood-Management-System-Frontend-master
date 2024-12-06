import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="h-full py-4">
      <ul className="space-y-2" key={items.length}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <li key={item.name}>
              <button
                onClick={() => onItemClick(item)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                  isActive
                    ? "bg-red-100 text-red-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.displayName}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      action: PropTypes.func,
    })
  ).isRequired,
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
