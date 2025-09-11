import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

const DiscoverFeatured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "House on the Hollywood",
      price: "$4,600",
      image: "/house1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Comfortable Villa Green",
      price: "$5,800",
      image: "/house2.png",
      featured: true,
    },
    {
      id: 3,
      title: "Quality House for Sale",
      price: "$2,500",
      image: "/house3.png",
      featured: true,
    },
    {
      id: 4,
      title: "Modern Apartment",
      price: "$3,200",
      image: "/house1.png",
      featured: true,
    },
    {
      id: 5,
      title: "Luxury City Villa",
      price: "$7,500",
      image: "/house2.png",
      featured: true,
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
    <div className="bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto pt-36 pb-16 px-4">
        {/* Section Header */}
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold">Discover Our Featured Listings</h2>
          <div className="flex flex-col md:flex-row justify-between gap-2 py-3">
            <h1 className="text-[#717171] text-sm">
              Aliquam lacinia diam quis lacus euismod
            </h1>
            <p className="flex items-center font-bold text-md cursor-pointer">
              See All Properties <GoArrowUpRight className="ml-1" />
            </p>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${  currentSlide * (100 / cardsPerView)}%)`, }}
            >
              {properties.map((property, index) => (
                <div
                  key={index}
                  className={`w-full ${
                    cardsPerView === 1
                      ? "sm:w-full" : cardsPerView === 2 ? "sm:w-1/2" : "lg:w-1/3"
                  } flex-shrink-0 px-3`}
                >
                  <div className="bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Property Image */}
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-56 object-cover"
                      />
                      {property.featured && (
                        <div className="absolute top-4 left-4 bg-[#EB6753] text-white text-xs font-bold px-3 py-1 rounded-md">
                          FEATURED
                        </div>
                      )}
                    </div>

                    {/* Property Details */}
                    <div className="p-4">
                      <h3 className="text-base font-bold mb-2">
                        {property.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-[#EB6753]">
                          {property.price}
                        </span>
                        <button className="text-sm font-medium text-gray-700 hover:text-[#EB6753]">
                          View Details →
                        </button>
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
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverFeatured;
