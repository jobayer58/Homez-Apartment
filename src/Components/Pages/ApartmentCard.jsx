import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const ApartmentCard = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
      const [cardsPerView, setCardsPerView] = useState(5);
    
      // Sample property data
      const properties = [
        {
          id: 1,
          title: "Houses",
          quantity: "7 Properties",
          image: "/type1.jpg.png",
          featured: true,
        },
        {
          id: 2,
          title: "Apartments",
          quantity: "3 Properties",
          image: "/type2.jpg.png",
          featured: true,
        },
        {
          id: 3,
          title: "Office",
          quantity: "4 Properties",
          image: "/type3.jpg.png",
          featured: true,
        },
        {
          id: 4,
          title: "Villa",
          quantity: "4 Properties",
          image: "/type4.jpg.png",
          featured: true,
        },
        {
          id: 5,
          title: "town Home",
          quantity: "2 Properties",
          image: "/type5.jpg.png",
          featured: true,
        },
        {
          id: 6,
          title: "Houses",
          quantity: "7 Properties",
          image: "/type1.jpg.png",
          featured: true,
        }
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
        <div>
            <div className="">
                <div className="max-w-6xl mx-auto pt-20 md:pt-36 pb-16 px-4">
                    {/* Section Header */}
                    <div className="text-start mb-12">
                        <h2 className="text-3xl font-bold">Exploring Apartments Types</h2>
                        <div className="flex flex-col md:flex-row justify-between gap-2 py-3">
                            <h1 className="text-[#717171] text-sm">
                                Aliquam lacinia diam quis lacus euismod
                            </h1>
                            <p className="flex items-center font-bold text-md cursor-pointer">
                                 All Types <GoArrowUpRight className="ml-1" />
                            </p>
                        </div>
                    </div>

                    {/* Slider Container */}
                    <div className="relative ">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`, }}
                            >
                                {properties.map((property, index) => (
                                    <div
                                        key={index}
                                        className={`w-full ${cardsPerView === 1
                                                ? "sm:w-full" : cardsPerView === 2 ? "sm:w-1/2" : "lg:w-1/5"
                                            } flex-shrink-0 px-3`}
                                    >
                                        <div className="bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl shadow-lg hover:-translate-y-1">
                                            {/* Property Image */}
                                            <div className="relative">
                                                <img
                                                    src={property.image}
                                                    alt={property.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                               
                                            </div>

                                            {/* Property Details */}
                                            <div className="p-4">
                                                <h3 className="text-base font-bold mb-2">
                                                    {property.title}
                                                </h3>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-base  ">
                                                        {property.quantity}
                                                    </span>
                                                   
                                                </div>
                                            </div>
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
                                className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-black" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;