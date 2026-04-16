import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-20 pb-12 px-6">
      <h1 className="text-5xl font-bold text-[#1f2937] mb-6 tracking-tight">
        Friends to keep close in your life
      </h1>
      
      <p className="max-w-xl text-[#64748b] text-lg leading-relaxed text-center mb-10">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
        relationships that matter most.
      </p>
      
      <button className="flex items-center gap-3 bg-[#244d3fFF] text-white px-7 py-3 rounded-md font-bold hover:bg-[#0d221f] transition-all">
        <FaPlus size={14} />
        Add a Friend
      </button>
    </section>
  );
};

export default Banner;