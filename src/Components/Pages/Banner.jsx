import React from 'react';
import banner from '../../assets/banner.png'
import { GoSearch } from 'react-icons/go';
import { GiSettingsKnobs } from 'react-icons/gi';

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
            <div className="max-w-5xl md:h-[130px] absolute left-1/2 bottom-[-65px] transform -translate-x-1/2 
                  bg-white rounded-2xl shadow-lg w-11/12 md:w-4/5 lg:w-3/4 p-2 px-3">
                {/* Tabs */}
                <div className="flex gap-4  pb-2 mb-4">
                    <button className="px-4 py-2 bg-gray-100 rounded-t-lg font-medium">All</button>
                    <button className="px-4 py-2 font-medium">For Sale</button>
                    <button className="px-4 py-2 font-medium">For Rent</button>
                </div>

                {/* Search Fields */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    {/* search */}
                    <div className=''>
                        <h1 className='font-bold text-[14px]'>Search</h1>
                        <input type="search" name="" id="" className='text-[14px]' placeholder="Enter keywords" />
                    </div>
                    {/* Type */}
                    <div className=''>
                        <h1 className='font-bold text-[14px]'>Looking For</h1>
                        <p className='text-[14px] flex justify-between items-center'>Type <div className="w-2 bg-black h-1 "></div></p>
                    </div>
                    {/* location*/}
                    <div>
                        <h1 className='font-bold text-[14px]'>Location</h1>
                        <p className='text-[14px] flex justify-between items-center'>Location <div className="w-2 bg-black h-1"></div></p>
                    </div>
                    <div className="">
                        <h1 className='font-bold text-[14px]'>Price</h1>
                        <h1>$0    -    $5.800</h1>
                    </div>
                    {/* advance */}
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            {/* <GiSettingsKnobs></GiSettingsKnobs> */}
                            <p>Advanced</p>
                        </div>
                        <button className="bg-[#EB6753] hover:bg-orange-600 text-white rounded-md py-3 px-4 flex items-center justify-center gap-1 font-bold text-[14px]">
                            <GoSearch className='text-xl'></GoSearch> Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;