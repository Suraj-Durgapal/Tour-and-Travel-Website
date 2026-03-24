import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { PiFanDuotone } from "react-icons/pi";
// import { Link } from "react-router-dom";
import hotels from "../../data/hotels";

const HotelDetails = () => {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  const selectedHotel = hotels.find((hotel) => hotel.id === Number(hotelId));
  return (
    <div className=" w-full bg-[#f8f6f2]">
      {/* Hotel Details */}
      <section className="py-10 w-full px-25 ">
        <div className="px-20 flex gap-10 pb-10">
          <div className=" w-[70%] p-2 bg-white shadow-2xl ">
            <div className="flex w-1/1 p-4 justify-between ">
              <div className="w-1/1">
                <h1 className="text-3xl font-medium">{selectedHotel.name}</h1>
                <p>{selectedHotel.location}</p>
              </div>
              <div className="flex flex-col  font-medium w-1/3">
                {/* <div> */}
                <p>Bedroom: 1</p>
                {/* </div> */}
                {/* <div> */}
                <p>Max Guest: 2</p>
                {/* </div> */}
              </div>
              <div className=" w-1/4 pl-10">
                <p className="bg-green-600 text-white px-1 py-1 rounded text-sm font-medium w-13 text-center">
                  {" "}
                  {selectedHotel.rating}★
                </p>
                <p>({selectedHotel.reviews} reviews)</p>
              </div>
            </div>
            <div className="flex w-full gap-1 p-3">
              <div className="w-1/2">
                <img
                  src="https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg"
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <img
                  src="https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg"
                  alt=""
                />
              </div>
            </div>
            {/* <div className='flex  justify-between p-4 w-1/3 pr-20 bg-white font-medium rounded-md shadow-md h-50 flex-wrap'>
                                    <div className='w-40'>
                                            <h4>Dulex Valley View</h4>
                                            <p>2 Guests</p>

                                            <p>1 Room</p>
                                    </div>
                                    <div>
                                        <p>₹812</p>
                                        <p className="text-xs text-gray-500">Taxes included</p>
                                    </div>
                                    <div className='w-full'>
                                         <button
                                         className='bg-green-600 w-full px-20 p-2 mt-8 text-white font-medium text-lg'
                                         >Book</button>
                                    </div>
                                </div> */}
          </div>
          <div className="flex  justify-between p-4 w-1/4  bg-white font-medium rounded-md shadow-md h-50 flex-wrap">
            <div className="w-40">
              <h4>{selectedHotel.name}</h4>
              <p>{selectedHotel.rooms[0].capacity}</p>

              <p>1 Room</p>
            </div>
            <div>
              <p className="text-green-600">
                ₹{selectedHotel.rooms[0].price}/ night
              </p>
              <p className="text-xs text-gray-500">Taxes included</p>
            </div>
            <div className="w-full">
              <button className="bg-green-600 w-full px-20 p-2 mt-8 text-white font-medium text-lg">
                Room Options
              </button>
            </div>
          </div>
        </div>

        <div className="mx-30 py-10 ">
          <h2 className="text-2xl font-medium pb-3 pl-2">
            More Rooms Available:
          </h2>
          {selectedHotel.rooms.map((room) => (
            <div
              key={room.id}
              className="flex  bg-white w-full shadow-lg shadow-neutral-300"
            >
              <div className="flex-1 p-2 pl-3 ">
                <h2 className="font-medium text-xl pb-2 text-shadow-sm text-shadow-neutral-300 pl-1">
                  {room.type}
                </h2>
                <img
                  className="rounded-lg"
                  src={selectedHotel.img[0].img1}
                  alt=""
                />
              </div>
              <div className="flex-1 p-4 pt-8 pl-5">
                <h3 className="pb-8 font-semibold text-lg pt-4">
                  Room No: {room.id}
                </h3>
                <ol className="font-semibold list-disc pl-4">
                  <li className="mb-1">Meals available at extra charges</li>
                  <li className="mb-1">Free Parking Available</li>
                  <li className="mb-1">5km from the Nanital City</li>
                </ol>
              </div>
              <div className="flex-1 p-7 text-lg  pt-18">
                <h4 className="mb-1 ">{selectedHotel.discount}off</h4>
                <div className="mb-4 tracking-tight leading-6 ">
                  <p className="font-medium text-2xl text-green-600">
                    ₹{room.price}/ night
                  </p>
                  <p className="text-md pl-1 opacity-90 text-neutral-600">
                    + taxes include
                  </p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      navigate(`/hotel/${hotelId}/room/${room.id}`)
                    }
                    className="border-green-500 border-2 rounded-md  p-2 px-6 cursor-pointer hover:bg-green-500 text-xl font-medium transition  duration-150 hover:text-white"
                  >
                    Select Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotel Details */}
      <section className="px-20 mx-25 pb-10">
        <div className="pt-10 w-full">
          <h3 className="text-2xl font-medium">Amenties</h3>
          <ul className="flex flex-wrap gap-2 mt-3 text-md">
            <div className="flex items-center ">
              <FaWifi />
              <li className="px-2 py-1 rounded ">Free Wifi</li>
            </div>
            <div className="flex items-center ">
              <div className="flex items-center ">
                <PiFanDuotone />
                <li className="px-2 py-1 rounded ">Air Conditioning</li>
              </div>
            </div>

            <li className="px-2 py-1 rounded w-[32%]">Air Conditioning</li>
            <li className="px-2 py-1 rounded w-[32%]">Free Breakfast</li>
            <li className="px-2 py-1 rounded w-[32%]">Club House</li>
          </ul>
        </div>
        <div className="pt-10">
          <h3 className="text-xl font-medium">About The Hotel</h3>
          <p>
            'Bheemtals serene lake, Kainchi Dhams spiritual charm and lush
            landscapes surround this Nainital retreat.'
            <br />
            About Property Enjoy your stay at Super Collection O Bhowali
            Nainital Near Graphic Era Hill University, where practicality meets
            comfort in the serene surroundings of Nainital.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HotelDetails;
