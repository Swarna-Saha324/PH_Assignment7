import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FaBell, FaArchive, FaTrashAlt, FaPhoneAlt, FaCommentDots, FaVideo } from 'react-icons/fa';
import { useFriend } from '../context/FriendContext'; 

const FriendDetails = () => {
    const { id } = useParams();
    const { addInteraction } = useFriend(); 
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(f => f.id === parseInt(id));
                setFriend(found);
            });
    }, [id]);

    if (!friend) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="bg-[#f9fafb] min-h-screen p-4 md:p-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* --- LEFT COLUMN --- */}
                <div className="md:col-span-4 space-y-4">
                    {/* Main Profile Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
                        <img 
                            src={friend.picture} 
                            alt={friend.name} 
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50 shadow-sm"
                        />
                        <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
                        
                        {/* Status Badge */}
                        <span className="mt-2 px-6 py-1 bg-[#ef5350] text-white text-[10px] font-bold uppercase rounded-full">
                            {friend.status}
                        </span>
                        
                        {/* Tag */}
                        <span className="mt-2 px-4 py-1 bg-[#e8f5e9] text-[#4caf50] text-[10px] font-bold uppercase rounded-full">
                            {friend.tags?.[0] || 'Friend'}
                        </span>

                        <p className="mt-6 text-gray-500 italic text-center text-sm leading-relaxed">
                            "{friend.bio}"
                        </p>
                        <p className="mt-2 text-gray-400 text-xs">Preferred: {friend.email.split('@')[0]}</p>
                    </div>

                    {/* Left Column Action Buttons */}
                    <div className="space-y-3">
                        <button className="w-full bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-sm font-semibold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
                            <FaBell className="text-gray-400" /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-sm font-semibold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
                            <FaArchive className="text-gray-400" /> Archive
                        </button>
                        <button className="w-full bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-sm font-semibold text-red-500 flex items-center justify-center gap-2 hover:bg-red-50">
                            <FaTrashAlt /> Delete
                        </button>
                    </div>
                </div>

                {/* --- RIGHT COLUMN --- */}
                <div className="md:col-span-8 space-y-6">
                    
                    {/* 1. Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="text-4xl font-bold text-gray-800">{friend.days_since_contact}</div>
                            <div className="text-gray-400 text-[10px] font-bold uppercase mt-2">Days Since Contact</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="text-4xl font-bold text-gray-800">{friend.goal}</div>
                            <div className="text-gray-400 text-[10px] font-bold uppercase mt-2">Goal (Days)</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="text-2xl font-bold text-[#1a3d37] mt-2">{friend.next_due_date}</div>
                            <div className="text-gray-400 text-[10px] font-bold uppercase mt-2">Next Due</div>
                        </div>
                    </div>

                    {/* 2. Relationship Goal Section */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                        <button className="absolute top-6 right-8 text-gray-400 border px-3 py-1 rounded-md text-xs hover:bg-gray-50">
                            Edit
                        </button>
                        <h3 className="text-[#1a3d37] font-bold text-lg mb-4">Relationship Goal</h3>
                        <p className="text-gray-600 text-sm">
                            Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
                        </p>
                    </div>

                    {/* 3. Quick Check-In Section */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-[#1a3d37] font-bold text-lg mb-6">Quick Check-In</h3>
                        {/* 3. Quick Check-In Section */}
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
    <h3 className="text-[#1a3d37] font-bold text-lg mb-6">Quick Check-In</h3>
    <div className="grid grid-cols-3 gap-4">
        {/* Call Button */}
        <button 
            onClick={() => addInteraction(friend, 'Call')}
            className="flex flex-col items-center justify-center gap-3 p-8 bg-[#f8f9fa] rounded-2xl hover:bg-gray-100 transition-colors"
        >
            <FaPhoneAlt size={22} className="text-gray-700" />
            <span className="text-sm font-bold text-gray-700">Call</span>
        </button>

        {/* Text Button */}
        <button 
            onClick={() => addInteraction(friend, 'Text')}
            className="flex flex-col items-center justify-center gap-3 p-8 bg-[#f8f9fa] rounded-2xl hover:bg-gray-100 transition-colors"
        >
            <FaCommentDots size={24} className="text-gray-700" />
            <span className="text-sm font-bold text-gray-700">Text</span>
        </button>

        {/* Video Button */}
        <button 
            onClick={() => addInteraction(friend, 'Video')}
            className="flex flex-col items-center justify-center gap-3 p-8 bg-[#f8f9fa] rounded-2xl hover:bg-gray-100 transition-colors"
        >
            <FaVideo size={22} className="text-gray-700" />
            <span className="text-sm font-bold text-gray-700">Video</span>
        </button>
    </div>
</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;