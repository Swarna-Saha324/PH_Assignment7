import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
// If the "X" logo is preferred over the bird, use FaXTwitter from react-icons/fa6

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white py-12 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center border-b border-white/10 pb-10">
        
        {/* Brand Name */}
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-center max-w-2xl mb-8 opacity-90">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Section */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg font-semibold">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#244d3f] p-2.5 rounded-full hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white text-[#244d3f] p-2.5 rounded-full hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white text-[#244d3f] p-2.5 rounded-full hover:bg-gray-200 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;