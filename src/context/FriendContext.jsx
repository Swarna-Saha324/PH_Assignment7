import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { FaPhoneAlt, FaCommentDots, FaVideo } from 'react-icons/fa';



const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    
    const [timelineEntries, setTimelineEntries] = useState([]);

    const addInteraction = (friend, method) => {
    
    const isDuplicate = timelineEntries.some(
        (entry) => entry.friendId === friend.id && entry.type === method
    );

    if (isDuplicate) {
        toast.error(`Already have a ${method} record!`);
        return;
    }

    
    let imagePath = '';
    if (method === 'Call') imagePath = '/assets/call.png'; 
    else if (method === 'Text') imagePath = '/assets/text.png';
    else if (method === 'Video') imagePath = '/assets/video.png';

    const newEntry = {
        id: Date.now(),
        friendId: friend.id,
        type: method,
        with: friend.name,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        icon: imagePath 
    };

    setTimelineEntries([newEntry, ...timelineEntries]);
    toast.success(`${method} added to timeline!`);
};
    return (
        <FriendContext.Provider value={{ timelineEntries, addInteraction }}>
            {children}
        </FriendContext.Provider>
    );
};

export const useFriend = () => useContext(FriendContext);