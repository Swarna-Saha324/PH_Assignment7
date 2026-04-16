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
        <NavLink to={'/'} className="flex items-center gap-2 bg-[#244d3fFF] text-white px-4 py-2 rounded-lg shadow-sm">
          <FaHome size={18} />
          <span>Home</span>
        </NavLink>
        
        <NavLink to={'/timeline'} className="flex items-center gap-2 hover:text-[#244d3fFF] transition-colors">
          <FaRegClock size={18} />
          <span>Timeline</span>
        </NavLink>
        
        <NavLink to={'/stats'} className="flex items-center gap-2 hover:text-[#244d3fFF] transition-colors">
          <FaRegChartBar size={18} />
          <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;