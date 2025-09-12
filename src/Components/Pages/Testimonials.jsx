import React, { useEffect, useState } from 'react';
import icon from '../../assets/icon5.png';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    const properties = [
        {
            id: 1,
            Name: 'Ali Tufan',
            title: "Marketing",
            description: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti"',
            image: "/profile1.png",
        },
        {
            id: 2,
            Name: 'Albert Flores',
            title: "Designer",
            description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae"',
            image: "/profile2.png",
        },
        {
            id: 3,
            Name: 'Rovert Fox',
            title: "Developer",
            description: '"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit"',
            image: "/profile3.png",
        },
        {
            id: 4,
            Name: 'Ali Tufan',
            title: "Marketing",
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
            image: "/profile1.png",
        },
        {
            id: 5,
            Name: 'Albert Flores',
            title: "Designer",
            description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae"',
            image: "/profile2.png",
        },
    ];

    // Detect screen size and set cards per view
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 640) {
                setCardsPerView(1); // Mobile
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2); // Tablet
            } else {
                setCardsPerView(3); // Desktop
            }
        };

        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    return (
        <div className='max-w-[1536px] mx-auto'>
            <div className='text-center space-y-3 pt-24 py-32'>
                <h1 className='text-3xl font-bold'>People Love Living with Realtor</h1>
                <p className='pb-5'>Aliquam lacinia diam quis lacus euismod</p>

                {/* Slider Container */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
                        >
                            {properties.map((property, index) => (
                                <div
                                    key={index}
                                    className={`w-full ${cardsPerView === 1
                                        ? "sm:w-full"
                                        : cardsPerView === 2
                                            ? "sm:w-1/2"
                                            : "lg:w-1/3"
                                        } flex-shrink-0 px-3`}
                                >
                                    {/* Card */}
                                    <div className="p-6 sm:p-10 lg:p-14 rounded-xl w-full h-auto border border-[#E9E9E9] ">
                                        <div className='flex justify-between'>
                                            <div className='flex gap-4 items-center'>
                                                <img
                                                    src={property.image}
                                                    className='w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover'
                                                    alt="img"
                                                />
                                                <div className='text-start'>
                                                    <h1 className='font-bold text-sm sm:text-base lg:text-lg'>
                                                        {property.Name}
                                                    </h1>
                                                    <h1 className='text-xs sm:text-sm'>{property.title}</h1>
                                                </div>
                                            </div>
                                            <img
                                                src={icon}
                                                className='w-6 h-4 sm:w-[36px] sm:h-[25px] object-cover'
                                                alt=""
                                            />
                                        </div>

                                        <p className='text-start pt-6 sm:pt-10 text-xs sm:text-sm lg:text-base'>
                                            {property.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {properties.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-black" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
