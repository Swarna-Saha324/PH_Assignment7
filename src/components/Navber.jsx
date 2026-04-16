import React from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { FaBeer } from 'react-icons/fa';

const handleInput = () =>
{
  toast.error("Button is clicked");
}

const Navbar = () => {
    return (
        <div>
            
            <button onClick={()=>handleInput()} className="btn btn-secondary"><FaBeer />Secondary</button>
        </div>
    );
};

export default Navbar;