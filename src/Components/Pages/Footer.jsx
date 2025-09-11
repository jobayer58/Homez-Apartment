import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import footerLogo from '../../assets/logo.png'
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-20 bg-[#181A20]'>
            <div className='text-[#ffffff] max-w-5xl mx-auto px-4 sm:px-6'>
                <div>
                    {/* upper text */}
                    <div className='pt-12 text-center'>
                        <div className='space-y-3'>
                            <h1 className='text-2xl font-semibold text-[#ffffff]'>
                                Subscribe Our Newsletter
                            </h1>
                            <p className='text-[#AEAEAE]'>We don’t send spam so don’t worry.</p>
                        </div>
                        <div className="flex justify-center mt-5">
                            <div className="flex w-full max-w-[480px] h-[56px] bg-white rounded-md shadow-md overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 outline-none text-black text-xs"
                                />
                                <div className='py-2 px-2'>
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
                            <ul className='text-xs text-[#BEBDBD] space-y-4'>
                                <img src={footerLogo} className='h-10 object-cover w-32' alt="" />
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
                            <h2 className='text-xs font-bold'>Popular Search</h2>
                            <ul className='space-y-3 text-[#BEBDBD] text-xs'>
                                <li>Apartment For Sale</li>
                                <li>Apartment For Rent</li>
                                <li>Offices For Sale</li>
                                <li>Offices For rent</li>
                            </ul>
                        </div>

                        {/* quick links */}
                        <div className='space-y-4 md:w-1/4'>
                            <h1 className='text-xs font-bold'>Quick links</h1>
                            <ul className='space-y-3 text-[#BEBDBD] text-xs'>
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
                            <h2 className='text-xs font-bold'>Apps</h2>
                            <ul className='space-y-3 text-[#BEBDBD] text-xs'>
                                <div className='w-full sm:w-38 h-14 bg-[#FFFFFF0A] rounded-md flex justify-start items-center p-4 gap-2'>
                                    <FaApple className='text-xl text-white' />
                                    <div>
                                        <h1 className='text-xs text-[#BEBDBD]'>Download on the</h1>
                                        <h2 className='text-white'>Apple Store</h2>
                                    </div>
                                </div>
                                <div className='w-full sm:w-38 h-14 bg-[#FFFFFF0A] rounded-md flex justify-start items-center p-4 gap-2'>
                                    <FaGooglePlay className='text-xl text-white' />
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
                    <div className='flex flex-col md:flex-row justify-between items-center py-5 text-xs gap-4'>
                        <p className='font-mono'>© Homez – All rights reserved</p>
                        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                            <p className='font-bold'>Follow Us</p>
                            <div className='flex text-[16px] gap-4'>
                                <BiLogoFacebook />
                                <BiLogoTwitter />
                                <BiLogoInstagram />
                                <BiLogoLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
