import React, { useState, useEffect } from 'react';
import FriendCard from '../Ui/FriendCard';

const Cartfetching = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        const timer = setTimeout(() => {
            fetch('/data.json') 
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch");
                    return res.json();
                })
                .then(data => {
                    setDatas(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }, 1000); 

    
        return () => clearTimeout(timer);
    }, []); 

  
    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3d37]"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-10 mt-10">
            <hr className="border-gray-200 mb-10" />
            <h2 className="text-2xl font-bold text-[#1a2b3c] mt-6 mb-8">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {datas.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default Cartfetching;