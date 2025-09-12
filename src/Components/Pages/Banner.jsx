import React from 'react';
import banner from '../../assets/banner.png'
import { GoSearch } from 'react-icons/go';
import { GiSettingsKnobs } from 'react-icons/gi';

const Banner = () => {
    return (
        <div className="relative bg-[#F7F7F7]">
            {/* Banner Image */}
            <img
                src={banner}
                alt="Banner"
                className="lg:w-full lg:h-full h-[500px] object-cover bg-center"
            />

            {/* Main Card */}
            <div className="max-w-6xl md:h-[100px] bg-white shadow-sm bottom-[50px] 
                            rounded-tl-none rounded-lg relative border border-gray-200 
                            mx-auto w-11/12">
                
                {/* Top section */}
                <div className="absolute -top-[55px] -left-[0.5px] rounded-t-md 
                                md:w-[311px] lg:h-[55px] w-full bg-[#F7F7F7] hover:bg-white 
                                font-semibold shadow-sm">
                    <div className="flex items-center justify-around py-4">
                        <button className="text-[#717171] hover:text-black">All</button>
                        <button className="text-[#717171] hover:text-black">For Sale</button>
                        <button className="text-[#717171] hover:text-black">For Rent</button>
                    </div>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                    
                    {/* Search */}
                    <div className="relative col-span-3 flex p-4 md:p-6">
                        <div className="space-y-2 w-full">
                            <h1 className="font-bold text-[14px]">Search</h1>
                            <input 
                                type="search" 
                                placeholder="Enter keywords" 
                                className="text-[14px] w-full border rounded-md  py-1 md:border-0 md:rounded-none"
                            />
                        </div>
                        <div className="hidden md:block w-[1px] bg-[#181A2012] h-16"></div>
                    </div>

                    {/* Type */}
                    <div className="relative col-span-2 flex p-4 md:py-5">
                        <div className="space-y-2 w-full">
                            <h1 className="font-bold text-[14px]">Looking For</h1>
                            <p className="text-[14px] flex justify-between items-center">
                                Type <div className="w-2 bg-black h-1 mr-4"></div>
                            </p>
                        </div>
                        <div className="hidden md:block w-[1px] bg-[#181A2012] h-16"></div>
                    </div>

                    {/* Location */}
                    <div className="relative col-span-2 flex p-4 md:py-5">
                        <div className="space-y-2 w-full">
                            <h1 className="font-bold text-[14px]">Location</h1>
                            <p className="text-[14px] flex justify-between items-center">
                                Location <div className="w-2 bg-black h-1 mr-4"></div>
                            </p>
                        </div>
                        <div className="hidden md:block w-[1px] bg-[#181A2012] h-16"></div>
                    </div>

                    {/* Price */}
                    <div className="relative col-span-2 flex p-4 md:py-5">
                        <div className="space-y-2 w-full">
                            <h1 className="font-bold text-[14px]">Price</h1>
                            <h1>$0 - $5,800</h1>
                        </div>
                        <div className="hidden md:block w-[1px] bg-[#181A2012] h-16"></div>
                    </div>

                    {/* Advanced */}
                    <div className="relative col-span-3 lg:flex flex-col md:flex-row 
                                    items-center lg:justify-between gap-4 p-4 ">
                        <div className="flex gap-2 items-center">
                            <GiSettingsKnobs />
                            <p className="font-bold">Advanced</p>
                        </div>
                        <button className="bg-[#EB6753] hover:bg-orange-600 text-white rounded-md py-2 px-4 flex items-center justify-center gap-1 font-bold text-[14px]">
                            <GoSearch className="text-xl" /> Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
