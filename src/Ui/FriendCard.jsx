import React from 'react';



const FriendCard = ({ friend }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md">
    
            <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-50"
            />
            
            
            <h3 className="text-lg font-bold text-[#1a2b3c] mb-1">
                {friend.name}
            </h3>
            
            
            <p className="text-xs text-gray-400 mb-3">
                {friend.days_since_contact}d ago
            </p>

          
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags && friend.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="px-3 py-0.5 bg-[#e8f5e9] text-[#4caf50] text-[10px] font-bold uppercase rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

          
            <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${
                friend.status === 'overdue' ? 'bg-[#ef5350]' : 
                friend.status === 'on-track' ? 'bg-[#2e7d32]' : 'bg-[#ffa726]'
            }`}>
                {friend.status === 'overdue' ? 'Overdue' : 
                 friend.status === 'on-track' ? 'On-Track' : 'Almost Due'}
            </div>
        </div>
    );
};



export default FriendCard;
