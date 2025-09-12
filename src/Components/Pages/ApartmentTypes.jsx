import React from 'react';
import type1 from '../../assets/type1.jpg.png'
import type2 from '../../assets/type2.jpg.png'
import type3 from '../../assets/type3.jpg.png'
import type4 from '../../assets/type4.jpg.png'
import type5 from '../../assets/type5.jpg.png'
import type6 from '../../assets/type6.jpg.png'

const ApartmentTypes = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto py-24'>
                {/* text */}
                <div className='text-center space-y-3 pt-6'>
                    <h1 className='text-3xl font-bold'>Exploring Apartments Types</h1>
                    <p className='pb-5'>Aliquam lacinia diam quis lacus euismod</p>
                </div>

                {/* image layer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 px-4 lg:px-0">
                    {/* 1st row */}
                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-6 h-[260px]">
                        <img src={type1} alt="type1" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        <div className="absolute top-5 left-6 text-white font-bold">
                            <h1 className="text-md">Houses</h1>
                            <p className="text-xs">7 Properties</p>
                        </div>
                    </div>

                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-3 h-[260px]">
                        <img src={type2} alt="type2" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        <div className="absolute top-5 left-6 text-white font-bold">
                            <h1 className="text-md">Apartments</h1>
                            <p className="text-xs">3 Properties</p>
                        </div>
                    </div>

                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-3 h-[260px]">
                        <img src={type3} alt="type3" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        <div className="absolute top-5 left-6 text-white font-bold">
                            <h1 className="text-md">Office</h1>
                            <p className="text-xs">4 Properties</p>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-3 h-[260px]">
                        <img src={type4} alt="type4" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        <div className="absolute top-5 left-6 text-white font-bold">
                            <h1 className="text-md">Townhome</h1>
                            <p className="text-xs">2 Properties</p>
                        </div>
                    </div>

                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-3 h-[260px]">
                        <img src={type5} alt="type5" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        <div className="absolute top-5 left-6 text-white font-bold">
                            <h1 className="text-md">Villa</h1>
                            <p className="text-xs">4 Properties</p>
                        </div>
                    </div>

                    <div className="relative col-span-1 sm:col-span-2 lg:col-span-6 h-[260px]">
                        <img src={type6} alt="type6" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                        <div className="absolute top-5 left-6 text-white font-bold">
                            <h1 className="text-md">Bungalow</h1>
                            <p className="text-xs">7 Properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentTypes;
