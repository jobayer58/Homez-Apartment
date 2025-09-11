import React from 'react';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="relative">
            {/* Banner Image */}
            <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-cover bg-center"
            />

            {/* Banner Content */}
            
        </div>
    );
};

export default Banner;