import React from 'react';
import blog1 from '../../assets/div.top-image1.png'
import blog2 from '../../assets/div.top-image2.png'
import blog3 from '../../assets/div.top-image3.png'
import blog4 from '../../assets/div.top-image4.png'

const OurBlog = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-2'>
                {/* Hading Section */}
                <div className='text-center space-y-3 pt-20'>
                    <h1 className='text-3xl font-bold'>From Our Blog</h1>
                    <p className='pb-5'>Aliquam lacinia diam quis lacus euismod</p>
                </div>

                {/* Blog Card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 py-10 gap-6'>
                    {/* 1 */}
                    <div className="relative lg:col-span-3">
                        {/* Blog Image */}
                        <div className="flex justify-end relative">
                            <img
                                src={blog1}
                                alt='img'
                                className="w-full h-56 sm:h-64 object-cover rounded-md"
                            />
                            {/* Date Card (same design as your code) */}
                            <div className='w-[70px] h-[70px] bg-white absolute flex top-44 sm:top-56 right-3 rounded-md'>
                                <p className='py-3 px-6 grid text-center text-sm'>
                                    Feb <span className='text-center font-bold text-xl'>03</span>
                                </p>
                            </div>
                        </div>

                        {/* Blog Details */}
                        <div className="py-4 space-y-2">
                            <h3 className=" text-gray-500 font-extralight">Town Home</h3>
                            <p className='font-bold'>
                                Unveils the Best Canadian Cities for Biking and Walk
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="relative lg:col-span-3">
                        <div className="flex justify-end relative">
                            <img
                                src={blog2}
                                alt='img'
                                className="w-full h-56 sm:h-64 object-cover rounded-md"
                            />
                            <div className='w-[70px] h-[70px] bg-white absolute flex top-44 sm:top-56 right-3 rounded-md'>
                                <p className='py-3 px-6 grid text-center text-sm'>
                                    Feb <span className='text-center font-bold text-xl'>03</span>
                                </p>
                            </div>
                        </div>

                        <div className="py-4 space-y-2">
                            <h3 className=" text-gray-500 font-extralight">Villa</h3>
                            <p className='font-bold'>
                                Diamond Manor Apartment in the New York and Service
                            </p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='space-y-5 relative lg:col-span-3'>
                        {/* 3.1 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <img
                                    src={blog3}
                                    alt='img'
                                    className="w-full sm:w-[170px] h-[140px] object-cover rounded-md"
                                />
                            </div>
                            <div className='space-y-3 py-4'>
                                <h4 className='text-xs text-gray-500'>Town Home</h4>
                                <p className='font-bold text-sm'>
                                    7 Simple Ways to Keep Your Kids’ Toys From…
                                </p>
                                <h2 className='text-xs text-gray-500'>February 3, 2023</h2>
                            </div>
                        </div>
                        {/* 3.2 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <img
                                    src={blog4}
                                    alt='img'
                                    className="w-full sm:w-[170px] h-[140px] object-cover rounded-md"
                                />
                            </div>
                            <div className='space-y-3 py-4'>
                                <h4 className='text-xs text-gray-500'>House</h4>
                                <p className='font-bold text-sm'>
                                    Housing Markets That Changed the Most This…
                                </p>
                                <h2 className='text-xs text-gray-500'>February 3, 2023</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurBlog;
