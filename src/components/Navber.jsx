import React, { useState } from 'react';
import { FaHome, FaRegClock, FaRegChartBar, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
      isActive ? 'bg-[#244d3f] text-white shadow-sm' : 'text-gray-500 hover:text-[#244d3f] hover:bg-gray-50 md:hover:bg-transparent'
    }`;

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome size={18} /> },
    { to: "/timeline", label: "Timeline", icon: <FaRegClock size={18} /> },
    { to: "/stats", label: "Stats", icon: <FaRegChartBar size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold text-[#244d3f] tracking-tight shrink-0">
 
  <img 
    src="/assets/logo.png" 
    alt="KeenKeeper Logo" 
    className="w-20 h-8 md:w-30 md:h-10 object-contain mr-2" 
  />
 
</div>

          {/* Desktop & Tablet Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 font-medium">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkStyles}>
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button (visible only on mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#244d3f] p-2 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Only visible when isOpen is true) */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-50`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
              className={navLinkStyles}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;