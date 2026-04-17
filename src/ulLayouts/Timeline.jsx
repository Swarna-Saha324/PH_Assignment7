import React from 'react';
import { useFriend } from '../context/FriendContext';

const Timeline = () => {
    const { timelineEntries } = useFriend();
    return (
        <div className="max-w-4xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-8 text-[#1a2b3c]">Timeline</h2>
            
           <div className="space-y-4">
    {timelineEntries.map((item) => (
        <div key={item.id} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            
            {/* আইকনের বদলে ইমেজ ট্যাগ */}
            <div className="p-2 bg-gray-50 rounded-lg">
                <img 
                    src={item.icon} 
                    alt={item.type} 
                    className="w-8 h-8 object-contain" // সাইজ আপনার পছন্দমতো দিন
                />
            </div>

            <div>
                <p className="text-gray-800 font-medium text-lg">
                    <span className="font-bold">{item.type}</span> with {item.with}
                </p>
                <p className="text-gray-400 text-sm">{item.date}</p>
            </div>
        </div>
    ))}
</div>
        </div>
    );
};
export default Timeline;