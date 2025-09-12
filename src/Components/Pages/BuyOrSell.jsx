import React from 'react';
import cover from '../../assets/cover.jpeg'
import { GoArrowUpRight } from 'react-icons/go';

const BuyOrSell = () => {
    return (
        <div className='py-10'>
            <div
                className="bg-cover bg-center h-[400px] md:h-[588px] w-full object-cover flex items-center justify-center px-4"
                style={{ backgroundImage: `url(${cover})` }}
            >
                <div className='text-white text-center space-y-4'>
                    <h1 className='font-bold text-lg md:text-xl lg:text-2xl'>BUY OR SELL</h1>

                    <p className='text-lg md:text-2xl lg:text-4xl leading-relaxed md:leading-10'>
                        Looking to Buy a new property or sell an existing one? <br className='hidden md:block' />
                        Homez provides an awesome solution!
                    </p>

                    <div className='flex flex-col md:flex-row gap-4 md:gap-6 justify-center py-4'>
                        <button className='flex bg-[#EB6753] font-bold px-5 md:px-7 py-3 md:py-4 rounded-xl items-center  gap-2 text-sm md:text-base'>
                            Submit Property <GoArrowUpRight className='text-xl md:text-2xl' />
                        </button>

                        <button className='flex text-black bg-white px-5 md:px-7 py-3 md:py-4 rounded-xl items-center gap-2 font-bold text-sm md:text-base'>
                            Browser Properties <GoArrowUpRight className='text-xl md:text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyOrSell;
