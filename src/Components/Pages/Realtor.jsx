import React from 'react';
import icon1 from '../../assets/icon1.svg.png'
import icon2 from '../../assets/icon2.svg.png'
import icon3 from '../../assets/icon3.svg.png'
import { GoArrowUpRight } from 'react-icons/go';

const Realtor = () => {
    return (
        <div className='bg-[#EB67531A]'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center space-y-3 pt-20'>
                    <h1 className='text-3xl font-bold'>See How Realtour Can Help</h1>
                    <p className='pb-5'>Aliquam lacinia diam quis lacus euismod</p>
                </div>

                {/* card parent */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-5 py-10 pb-20 px-5 lg:px-2'>
                    
                    {/* 1 */}
                    <div className='relative col-span-1 sm:col-span-1 lg:col-span-3 h-[398px] bg-white rounded-2xl text-center space-y-8 py-12 hover:shadow-2xl transition-shadow duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={icon1} alt="" />
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl font-bold'>Buy a property</h1>
                            <p className='text-[16px] font-light text-[#181A20]'>Nullam sollicitudin blandit eros eu pretium. <br />
                            Nullam maximus ultricies auctor.</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='flex items-center border-[#EB6753] border-1 px-9 py-3 rounded-xl font-semibold text-[16px] hover:bg-[#EB6753]'>
                                Find a Home <GoArrowUpRight className='text-2xl' />
                            </button>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='relative col-span-1 sm:col-span-1 lg:col-span-3 h-[398px] bg-white rounded-2xl text-center space-y-8 py-12 hover:shadow-2xl transition-shadow duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={icon2} alt="" />
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl font-bold'>Sell a property</h1>
                            <p className='text-[16px] font-light text-[#181A20]'>Nullam sollicitudin blandit eros eu pretium. <br />
                            Nullam maximus ultricies auctor.</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='flex items-center border-[#EB6753] border-1 px-9 py-3 rounded-xl font-semibold text-[16px] hover:bg-[#EB6753]'>
                                Place an Ad <GoArrowUpRight className='text-2xl' />
                            </button>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='relative col-span-1 sm:col-span-2 lg:col-span-3 h-[398px] bg-white rounded-2xl text-center space-y-8 py-12 hover:shadow-2xl transition-shadow duration-300'>
                        <div className='flex items-center justify-center'>
                            <img src={icon3} alt="" />
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl font-bold'>Rent a property</h1>
                            <p className='text-[16px] font-light text-[#181A20]'>Nullam sollicitudin blandit eros eu pretium. <br />
                            Nullam maximus ultricies auctor.</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='flex items-center border-[#EB6753] border-1 px-9 py-3 rounded-xl font-semibold text-[16px] hover:bg-[#EB6753]'>
                                Find a Rental <GoArrowUpRight className='text-2xl' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Realtor;
