import React from "react";

const HotelCards = ({ hoteldata }) => {
  return (
    <div className="flex gap-6 p-3 bg-white rounded-lg w-full cursor-pointer border-2 border-transparent  shadow-sm hover:scale-102 transition-all  "
    
    >
      {/* Image */}
      <div className="w-1/3">
        <img
            
          className="w-full h-55 object-cover rounded-lg"
          src={hoteldata.img}
          alt={hoteldata.name}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between w-2/3">

        {/* Top */}
        <div>
          <h2 className="text-xl font-semibold">{hoteldata.name}</h2>
          <p className="text-gray-500 text-sm">{hoteldata.location}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
              {hoteldata.rating} ★
            </span>
            <span className="text-gray-500 text-sm">
              ({hoteldata.reviews} reviews)
            </span>
          </div>

          {/* Amenities */}
          <ul className="flex flex-wrap gap-2 mt-3 text-sm">
          {hoteldata.amenities.map((item, index) => (
                <li
                className="bg-gray-100 px-2 py-1 rounded"
                key={index}>{item}</li>
         ))}
            {/* <li className="bg-gray-100 px-2 py-1 rounded">Free Wifi</li>
            <li className="bg-gray-100 px-2 py-1 rounded">Breakfast</li>
            <li className="bg-gray-100 px-2 py-1 rounded">AC</li>
            <li className="bg-gray-100 px-2 py-1 rounded">Parking</li> */}
          </ul>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-4  " >
          <div>
            <p className="text-lg font-semibold text-green-600">{`₹${hoteldata.price}/ per night `}</p>
            <p className="text-xs text-gray-500">Taxes included</p>
          </div>

          <button className="bg-black hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-medium transition  duration-300 ease-out">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default HotelCards;