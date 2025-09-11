import React from 'react';
import brand1 from '../../assets/Link → b1.jpg.png'
import brand2 from '../../assets/Link → b2.jpg.png'
import brand3 from '../../assets/Link → b3.jpg.png'
import brand4 from '../../assets/Link → b4.jpg.png'
import brand5 from '../../assets/Link → b5.jpg.png'
import brand6 from '../../assets/Link → b6.jpg.png'

const Trusted = () => {
    return (
        <div className='max-w-6xl mx-auto py-12 px-4'>
            <h1 className='text-center text-xl md:text-2xl font-semibold'>
                Trusted by the world’s best
            </h1>

            <div className='flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-10 py-10'>
                <img src={brand1} className='w-[84px] h-[26px] object-contain' alt="" />
                <img src={brand2} className='w-[83px] h-[20px] object-contain' alt="" />
                <img src={brand3} className='w-[74px] h-[42px] object-contain' alt="" />
                <img src={brand4} className='w-[122px] h-[24px] object-contain' alt="" />
                <img src={brand5} className='w-[82px] h-[25px] object-contain' alt="" />
                <img src={brand6} className='w-[99px] h-[30px] object-contain' alt="" />
            </div>
        </div>
    );
};

export default Trusted;
