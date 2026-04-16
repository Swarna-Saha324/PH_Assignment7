import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            {/* Added colon after 'text' and fixed spacing before 'tracking' */}
            <h1 className="text-9xl font-extrabold text-[#244d3f] tracking-widest">
                404
            </h1>
            
            <p className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
                Sorry, we couldn't find this page.
            </p>
            
            <p className="text-gray-500 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            {/* Added colon after 'bg' and 'hover:bg', and fixed the transition spacing */}
            <a 
                href="/" 
                className="bg-[#244d3f] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default Error;
