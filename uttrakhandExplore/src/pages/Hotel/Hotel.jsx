import React from "react";
import hotels from "../../data/hotels";
import HotelCards from "../../components/UI/HotelCards";
import { Link } from "react-router-dom";
import HotelDetails from "./HotelDetails";
import { useState } from "react";
// import TourCards from '../../components/UI/TourCards'

const Hotel = () => {
  const filterside = [
    {
      id: "Room",
      head: "Room",
      options: [
        { value: "single", label: "Single" },
        { value: "double", label: "Double" },
        { value: "family", label: "Family" },
        { value: "luxury room", label: "Luxury Room" },
      ],
    },
    {
      id: "Price",
      head: "Price",
      options: [
        { value: "₹1000", label: "₹0 - ₹1000" },
        { value: "₹1100", label: "₹1000 - ₹2500" },
        { value: "₹2500", label: "₹2500 - ₹5000" },
        { value: "₹5000", label: " above ₹5000" },
      ],
    },
    {
      id: "sortby",
      head: "Sort By",
      options: [
        { value: "ltoh", label: "Price Low to High" },
        { value: "htol", label: "Price High to Low" },
        // {value:"family", label:"Family"},
        // {value:"luxury room", label:"Luxury Room"}
      ],
    },
    {
      id: "Rating",
      head: "Rating",
      options: [
        { value: "4+", label: "4+" },
        { value: "3+", label: "3+" },
        { value: "4.5+", label: "4.5+" },
      ],
    },
  ];

  const [searchlocation, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchlocation.toLowerCase()),
  );

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const checkboxChange = () =>{

  }

  // const [filters, setFilters] = useState({
  //     price: [],
  //     rating: [], 
  //     sortbyprice: ""
  //   });

  //   const handleFilterChange = (category, value, checked) => {
  //     setFilters((prev) => {
  //       const updated = checked
  //         ? [...prev[category], value]
  //         : prev[category].filter((v) => v !== value);

  //       return { ...prev, [category]: updated };
  //     });
  //   };

  //   const filteredHotels = hotels.filter((hotel) => {
  //     if (filters.price.length) {
  //       if (!filters.price.includes(hotel.priceRange)) return false;
  //     }

  //     if (filters.rating.length) {
  //       if (!filters.rating.some((r) => hotel.rating >= r)) return false;
  //     }

  //     return true;
  //   });

  return (
    <div className="bg-[#f8f6f2] text-gray-800 h-full ">
      <div className="bg-emerald-200 h-[25vh] pt-10 w-full">
        <h1 className="text-3xl font-bold text-center">
          Book Hotel And HomeStay
        </h1>
      </div>
      <section className="flex justify-center relative h-full ">
        {/* <div className='bg-emerald-200 h-[25vh] pt-10 absolute w-full'>
                <h1 className='text-3xl font-bold text-center'>Book Hotel And HomeStay</h1>
            </div> */}
        <div className="flex px-20  p-9 bg-white  rounded-xl gap-7 relative -top-14 items-center   w-[70vw] justify-center">
          {/* SEARCH  */}
          <div className="max-w-90 relative mr-6">
            <label className="block text-sm font-medium text-gray-700 absolute -top-4 left-3 bg-white p-1 ">
              Where to
            </label>
            <input
              type="text"
              placeholder="eg. Destination"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-90 px-4 py-2 border border-gray-300 rounded-sm 
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                outline-none transition duration-200 font-medium text-lg"
            />
          </div>
          <div className="max-w-40 relative mr-4">
            {/* CHECK IN */}
            <label
              htmlFor="checkin"
              className="block text-sm font-medium text-gray-700 mb-2 absolute left-3 bg-white px-1 -top-2.4x"
            >
              Check-in
            </label>
            <input
              type="date"
              id="checkin"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm
                        focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                        outline-none transition duration-200 "
            />
          </div>

          {/* CHECK OUT */}
          <div className="max-w-40 relative">
            <label
              htmlFor="checkin"
              className="block text-sm font-medium text-gray-700 mb-2 absolute left-3 bg-white px-1 -top-2.4x"
            >
              Check-out
            </label>
            <input
              type="date"
              id={filterside.id}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm 
                                                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                                outline-none transition duration-200"
            />
          </div>
          <div>
            <button 
            onClick={handleSearch}
            className="bg-green-500 text-xl font-bold p-2.5 px-10 rounded-md ml-4 text-mist-100 ">
              SEARCH
            </button>
          </div>
        </div>
      </section>
      <section className="mx-30 pb-20 ">
        <div className="flex  justify-center gap-8 px-20 h-full">

          {/* Filter */}
          <div className="bg-white shadow-lg h-full sticky top-25">
            <div className="flex justify-between w-80 p-3 ">
              <h3>FILTERS</h3>
              <p>CLEAR</p>
            </div>
            <hr />
            <div className="p-4">
              {filterside.map((filt) => (
                <div key={filt.id}>
                  <h1 className="font-medium text-lg my-2">{filt.head}</h1>

                  {filt.options.map((option) => (
                    <label key={option.value} className="mb-1 pl-2 block">
                      <input
                        className="mr-2"
                        type="checkbox"
                        value={option.value}
                        onChange={(e) =>
                        {checkboxChange(e, option)}
                        }
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            {filteredHotels.length === 0 ? (
              <p className="text-center text-gray-500">
                No hotels found {searchlocation}
              </p>
            ) : (
              filteredHotels.map((hoteldata) => (
                <Link key={hoteldata.id} to={`/hotel/${hoteldata.id}`}>
                  <HotelCards hoteldata={hoteldata} />
                </Link>
              ))
            )}
          </div>

          {/* Hotels Cards */}
        </div>
      </section>
    </div>
  );
};

export default Hotel;
