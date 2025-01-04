import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({
  items,
  className = "",
  dropdownClassName = "",
  value,
  onChange,
  name,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (onChange) {
      onChange(item.value);
    }
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  const selectedItem = items.find((item) => item.value === value);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedItem?.label || ""}
          placeholder={placeholder}
          onClick={toggleDropdown}
          readOnly
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          ▼
        </span>
      </div>

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropdownClassName}`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, index) => (
              <button
                key={index}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  item.value === value
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {name && <input type="hidden" name={name} value={value || ""} />}
    </div>
  );
};

export default Dropdown;
