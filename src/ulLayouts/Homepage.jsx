import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import CardStatic from '../components/cart_static'; // naming match check
import Cartfetching from '../components/cartfetching';

const Homepage = () => {
    return (
        <main className="min-h-screen bg-gray-50/30">
            <Banner />
            
           
            <div className="container mx-auto px-4 md:px-10">
                <CardStatic />
                
                <Suspense fallback={
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3d37]"></div>
                    </div>
                }>
                    <Cartfetching ></Cartfetching>
                </Suspense>
            </div>
        </main>
    );
};

export default Homepage;