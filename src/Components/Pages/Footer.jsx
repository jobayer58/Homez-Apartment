import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import footerLogo from '../../assets/logoNavbar.png'
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-[#181A20]'>
            <div className='text-[#ffffff] max-w-6xl mx-auto px-4 sm:px-6'>
                <div>
                    {/* upper text */}
                    <div className='pt-12 text-center'>
                        <div className='space-y-3'>
                            <h1 className='text-3xl font-semibold text-[#ffffff]'>
                                Subscribe Our Newsletter
                            </h1>
                            <p className='text-[#AEAEAE]'>We don’t send spam so don’t worry.</p>
                        </div>
                        <div className="flex justify-center mt-5">
                            <div className="flex w-full max-w-[580px] h-[66px] bg-white rounded-md shadow-md overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 outline-none text-black text-xs"
                                />
                                <div className='py-3 px-2'>
                                    <button className="bg-[#EB6753] py-3 px-6 rounded-md text-xs text-white font-semibold transition w-full sm:w-auto">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom text */}
                    <div className='flex flex-col md:flex-row md:justify-between gap-8 py-10'>
                        {/* logo */}
                        <div className='flex flex-col md:w-1/3'>
                            <ul className='text-md text-[#BEBDBD] space-y-4'>
                                <div className="flex gap-3 items-center">
                                    <div className="w-[44px] h-[44px] rounded-full bg-[#EB6753] flex justify-center items-center">
                                        <img src={footerLogo} alt="" />
                                    </div>
                                    <h1 className="text-xl text-white">Homez</h1>
                                </div>
                                <h2 className='mt-6'>Address</h2>
                                <li className='leading-7 text-white'>
                                    789 Queensberry Street, North <br /> Melbourne VIC 3051, Australia.
                                </li>
                                <li className='leading-7'>
                                    Total Free Customer Care <br />
                                    <span className='text-white'>+(088) 123 456 789</span>
                                </li>
                                <li className='leading-7'>
                                    Live Support <br />
                                    <span className='text-white'>hi@homez.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Popular Search*/}
                        <div className='space-y-4 md:w-1/4'>
                            <h2 className='text-md font-bold'>Popular Search</h2>
                            <ul className='space-y-3 text-[#BEBDBD] text-md'>
                                <li>Apartment For Sale</li>
                                <li>Apartment For Rent</li>
                                <li>Offices For Sale</li>
                                <li>Offices For rent</li>
                            </ul>
                        </div>

                        {/* quick links */}
                        <div className='space-y-4 md:w-1/4'>
                            <h1 className='text-md font-bold'>Quick links</h1>
                            <ul className='space-y-3 text-[#BEBDBD] text-md'>
                                <li>Terms of use</li>
                                <li>Privacy Policy</li>
                                <li>Pricing Plans</li>
                                <li>Our Services</li>
                                <li>Contact</li>
                                <li>Careers</li>
                                <li>Faqs</li>
                            </ul>
                        </div>

                        {/* Apps */}
                        <div className='space-y-4 md:w-1/4'>
                            <h2 className='text-md font-bold'>Apps</h2>
                            <ul className='space-y-3 text-[#BEBDBD] text-xs'>
                                <div className='w-full sm:w-38 h-14 bg-[#FFFFFF0A] rounded-md flex justify-start items-center p-4 gap-2'>
                                    <FaApple className='text-xl text-white hover:text-[#EB6753]' />
                                    <div>
                                        <h1 className='text-xs text-[#BEBDBD]'>Download on the</h1>
                                        <h2 className='text-white'>Apple Store</h2>
                                    </div>
                                </div>
                                <div className='w-full sm:w-38 h-14 bg-[#FFFFFF0A] rounded-md flex justify-start items-center p-4 gap-2'>
                                    <FaGooglePlay className='text-xl text-white hover:text-[#EB6753]' />
                                    <div>
                                        <h1 className='text-xs text-[#BEBDBD]'>Download on the</h1>
                                        <h2 className='text-white'>Google Play</h2>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className='border-b-[1px] border-[#FFFFFF12]'></div>

                    {/* bottom copyright */}
                    <div className='flex flex-col md:flex-row justify-between items-center py-5 text-md gap-4'>
                        <p className='font-mono'>© Homez – All rights reserved</p>
                        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                            <p className='font-bold'>Follow Us</p>
                            <div className='flex text-xl gap-4'>
                                <BiLogoFacebook className='hover:text-[#EB6753]' />
                                <BiLogoTwitter  className='hover:text-[#EB6753]'/>
                                <BiLogoInstagram className='hover:text-[#EB6753]' />
                                <BiLogoLinkedin  className='hover:text-[#EB6753]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
