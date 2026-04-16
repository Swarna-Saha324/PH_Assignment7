import React from 'react';
import { FaHome, FaRegClock, FaRegChartBar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-3 border-b border-gray-100 bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#244d3fFF] tracking-tight">
        KeenKeeper
      </div>
      
      {/* Nav Links */}
      <div className="flex items-center space-x-8 text-gray-500 font-medium">
  {/* Home - Dynamic Highlight */}
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isActive ? 'bg-[#244d3f] text-white shadow-sm' : 'hover:text-[#244d3f]'
      }`
    }
  >
    <FaHome size={18} />
    <span>Home</span>
  </NavLink>

  {/* Timeline - Dynamic Highlight */}
  <NavLink 
    to="/timeline" 
    className={({ isActive }) => 
     `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isActive ? 'bg-[#244d3f] text-white shadow-sm' : 'hover:text-[#244d3f]'
      }`
    }
  >
    <FaRegClock size={18} />
    <span>Timeline</span>
  </NavLink>

  {/* Stats - Dynamic Highlight */}
  <NavLink 
    to="/stats" 
    className={({ isActive }) => 
     `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isActive ? 'bg-[#244d3f] text-white shadow-sm' : 'hover:text-[#244d3f]'
      }`
    }
  >
    <FaRegChartBar size={18} />
    <span>Stats</span>
  </NavLink>
</div>

    </nav>
  );
};

export default Navbar;