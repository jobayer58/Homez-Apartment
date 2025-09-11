import React from 'react';
import icon1 from '../../assets/Vector (1).png'
import icon2 from '../../assets/Vector (2).png'
import icon3 from '../../assets/Vector (3).png'

const BestDeal = () => {
    const properties = [
        {
            id: 1,
            title: "Luxury Family Home",
            price: "$5,800",
            beds: 6,
            baths: 3,
            area: 400,
            image: "/deal1.png"
        },
        {
            id: 2,
            title: "Gorgeous Villa Bay",
            price: "$4,800",
            beds: 8,
            baths: 2,
            area: 300,
            image: "/deal2.png"
        },
        {
            id: 3,
            title: "Skyper Pool Apartment",
            price: "$2,850",
            beds: 4,
            baths: 1,
            area: 200,
            image: "/deal3.png"
        },
        {
            id: 4,
            title: "Diamond Manor Apartment",
            price: "$3,500",
            beds: 3,
            baths: 1,
            area: 200,
            image: "/deal4.png"
        }
    ];

    return (
        <div className='bg-[#EB6753]'>
            <div className="max-w-6xl mx-auto py-16 lg:px-0 px-4  ">
                {/* Section Header */}
                <div className="text-start mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Discover Our Best Deals
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 py-2">
                        <h1 className="text-white text-sm sm:text-base">
                            Aliquam lacinia diam quis lacus euismod
                        </h1>
                        <div className='flex gap-2'>
                            <button className='bg-white text-[#EB6753] px-4 sm:px-5 py-2 rounded-md text-sm'>
                                For Sale
                            </button>
                            <button className='bg-[#FFFFFF1A] text-white px-4 sm:px-5 py-2 rounded-md text-sm'>
                                For Rent
                            </button>
                        </div>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <div 
                            key={property.id} 
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Property Image */}
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-40 sm:h-44 object-cover"
                                />
                            </div>

                            {/* Property Details */}
                            <div className="py-3 px-4">
                                <h3 className="font-bold mb-2">{property.title}</h3>
                                <div className='flex justify-between items-center text-sm sm:text-base'>
                                    <p className="font-bold text-[#EB6753]">{property.price}</p>
                                    <div className='flex gap-2 items-center'>
                                        <img src={icon3} className='h-3 w-4 object-contain' alt="" />
                                        {property.beds}
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src={icon1} className='h-3 w-4 object-contain' alt="" />
                                        {property.baths}
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src={icon2} className='h-3 w-4 object-contain' alt="" />
                                        {property.area}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestDeal;
