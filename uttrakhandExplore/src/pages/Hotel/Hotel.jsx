import React from 'react'
import hotels from '../../data/hotels'
import HotelCards from '../../components/UI/HotelCards'
// import TourCards from '../../components/UI/TourCards'

const Hotel = () => {

    const filter =[
        {
            id:"Room",
            head: "Room",
            options : [
                { value : "single", label: "Single" },
                { value: "double", label: "Double"},
                {value:"family", label:"Family"},
                {value:"luxury room", label:"Luxury Room"}
            ]
        },
        {
            id:"Price",
            head: "Price",
            options : [
                { value: "₹1000", label: "₹2000"},
                {value:"₹2500", label:"₹5000"},
                {value:"₹5000", label:"₹10000"}
            ]
        },
        {
            id:"sortby",
            head: "Sort By",
            options : [
                { value : "ltoh", label: "Price Low to High" },
                { value: "htol", label: "Price High to Low"},
                // {value:"family", label:"Family"},
                // {value:"luxury room", label:"Luxury Room"}
            ]
        },

    ]
  return (
    <div  className="bg-[#f8f6f2] text-gray-800 h-full ">
       
            <div className='bg-emerald-200 h-[25vh] pt-10 w-full'>
                <h1 className='text-3xl font-bold text-center'>Book Hotel And HomeStay</h1>
            </div>
            <section className='flex justify-center relative h-full '>
            {/* <div className='bg-emerald-200 h-[25vh] pt-10 absolute w-full'>
                <h1 className='text-3xl font-bold text-center'>Book Hotel And HomeStay</h1>
            </div> */}
                <div className='flex px-20  p-9 bg-white  rounded-xl gap-7 relative -top-14 items-center   w-[70vw] justify-center'>
                            <div className='max-w-90 relative mr-6'>
                                <label 
                                className='block text-sm font-medium text-gray-700 absolute -top-4 left-3 bg-white p-1 
                                '
                                >Where to</label>
                                <input type="text" placeholder='eg. Destination' 
                                className="w-90 px-4 py-2 border border-gray-300 rounded-sm 
                                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                outline-none transition duration-200 font-medium text-lg"
                                />
                            </div>
                            <div className="max-w-40 relative mr-4">

                                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2 absolute left-3 bg-white px-1 -top-2.4x">
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
                            <div className="max-w-40 relative">

                                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2 absolute left-3 bg-white px-1 -top-2.4x">
                                        Check-out
                                    </label>
                                    <input 
                                        type="date" 
                                        id={filter.id}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm 
                                            focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                            outline-none transition duration-200"
                                    />
                            </div>
                            <div >
                                    <button className='bg-green-500 text-xl font-bold p-2.5 px-10 rounded-md ml-4 text-mist-100 '>SEARCH</button>
                            </div>
                    </div>
            </section>
            <section className='mx-30 pb-20 '>
                <div className='flex  justify-center gap-8 px-20 h-full'>

                            {/* Filter */}
                        <div className='bg-white shadow-lg h-full sticky top-25'>
                                <div className='flex justify-between w-80 p-3 '>
                                        <h3>FILTERS</h3>
                                        <p>CLEAR</p>
										
                                </div>
								<hr />
                                <div className='p-4 '>
                                        {filter.map((filt)=>(
                                            <div key={filt.id}>
													<h1 className='font-medium text-lg my-2'>{filt.head}</h1>
													{filt.options.map((option)=>(
														<label 
														className='mb-1 pl-2  '
														key={option.value} style={{ display: "block" }}>
														<input
																className='mr-2 '
																type="checkbox"
																name={filter.id}
																value={option.value}
															/>
															{option.label}
													</label>
													))}                                          
                                            </div>
                                        ))}
                                </div>
                        </div>
						<div className='w-full flex flex-col gap-4'>
							{hotels.map((hoteldata)=>(
							// <div className='bg-white'>
									<HotelCards 
									key={hoteldata.id} hoteldata={hoteldata} 
									/>
									
							// </div>
								))}		
						</div>
						
                        {/* Hotels Cards */}
                </div>
							
            </section>

    </div>
  )
}

export default Hotel
