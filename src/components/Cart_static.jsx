import React from 'react';

const StatCard = ({ value, label }) => (
  <div className="bg-white p-10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center transition-transform hover:scale-[1.02]">
    <span className="text-4xl font-bold text-[#1a2b3c] mb-3">{value}</span>
    <span className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
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
    <div className="max-w-7xl mx-auto px-10 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Card_static;