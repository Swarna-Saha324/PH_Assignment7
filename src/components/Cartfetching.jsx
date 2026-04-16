import React, { useState, useEffect } from 'react';
import FriendCard from '../Ui/FriendCard';// কার্ডটি ইম্পোর্ট করুন

const Cartfetching = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json') 
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
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