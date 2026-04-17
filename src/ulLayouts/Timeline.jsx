import React, { useState } from 'react';
import { useFriend } from '../context/FriendContext';

const Timeline = () => {
    const { timelineEntries } = useFriend();
    
    
    const [filter, setFilter] = useState('All');

   
    const filteredEntries = timelineEntries.filter(entry => {
        if (filter === 'All') return true;
        return entry.type === filter;
    });

    return (
        <div className="max-w-4xl mx-auto p-10 bg-[#f9fafb] min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-[#1a2b3c]">Timeline</h2>
          
            <div className="mb-8">
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-200 p-2.5 rounded-xl text-sm text-gray-600 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                >
                    <option value="All">All interactions</option>
                    <option value="Call">Calls only</option>
                    <option value="Text">Texts only</option>
                    <option value="Video">Videos only</option>
                </select>
            </div>

            <div className="space-y-4">
                {filteredEntries.length > 0 ? (
                    filteredEntries.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-gray-50 rounded-2xl">
                               
                                <img 
                                    src={item.icon} 
                                    alt={item.type} 
                                    className="w-8 h-8 object-contain" 
                                />
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium text-lg">
                                    <span className="font-bold">{item.type}</span> with {item.with}
                                </p>
                                <p className="text-gray-400 text-sm font-medium">{item.date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-400">No {filter !== 'All' ? filter.toLowerCase() : ''} interactions found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;