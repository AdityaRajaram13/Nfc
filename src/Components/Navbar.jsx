import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Event listener to detect clicks outside the dropdowns
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowCurrencyDropdown(false);
        setShowProductDropdown(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProductDropdownHover = (isHovering) => {
    setShowProductDropdown(isHovering || showProductDropdown);
  };

  const handleCurrencyDropdownHover = (isHovering) => {
    setShowCurrencyDropdown(isHovering || showCurrencyDropdown);
  };

  const handleDropdownOptionClick = () => {
    setShowDropdown(false);
    setShowCurrencyDropdown(false);
    setShowProductDropdown(false);
  };

  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800" style={{ backgroundColor: "#111536" }}>
      <ul className="flex space-x-4 text-white">
        <li className="font-medium">Home</li>
        <li className="relative">
          <button
            className="font-medium"
            onMouseEnter={() => handleProductDropdownHover(true)}
            onMouseLeave={() => handleProductDropdownHover(false)}
          >
            Products
            {showProductDropdown && (
              <div className="absolute top-full left-0 w-40 bg-white shadow rounded-md mt-5" onMouseEnter={() => handleProductDropdownHover(true)} onMouseLeave={() => handleProductDropdownHover(false)} ref={dropdownRef}>
                {/* Products Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                    Product 1
                  </li>
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                    Product 2
                  </li>
                </ul>
              </div>
            )}
          </button>
        </li>
        <li className="relative">
          <button
            className="font-medium"
            onMouseEnter={() => handleCurrencyDropdownHover(true)}
            onMouseLeave={() => handleCurrencyDropdownHover(false)}
          >
            Currency
            {showCurrencyDropdown && (
              <div className="absolute top-full left-0 w-40 bg-white shadow rounded-md mt-5" onMouseEnter={() => handleCurrencyDropdownHover(true)} onMouseLeave={() => handleCurrencyDropdownHover(false)} ref={dropdownRef}>
                {/* Currency Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                    India
                  </li>
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                    USD
                  </li>
                </ul>
              </div>
            )}
          </button>
        </li>
      </ul>

      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="relative">
          <button
            className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"
            onClick={toggleDropdown}
          >
            {showDropdown && (
              <div className="absolute top-full right-0 w-40 bg-white shadow rounded-md mt-3" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} ref={dropdownRef}>
                {/* Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                    Log In
                  </li>
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                    Create Profile
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;