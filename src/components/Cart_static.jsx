import React from 'react';

const StatCard = ({ value, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-50 flex flex-col items-center justify-center transition-all">
    {/* The Number: Bold and Dark Green */}
    <span className="text-3xl font-bold text-[#244d3f] leading-none mb-2">
      {value}
    </span>
    
    {/* The Label: Small, Gray, and explicitly NOT bold */}
    <span className="text-gray-500 text-xs sm:text-sm font-normal text-center block leading-tight">
      {label}
    </span>
  </div>
);

const Card_static = () => {
  const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-10 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Card_static;
