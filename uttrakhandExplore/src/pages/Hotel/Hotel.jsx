import React from 'react'
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
    <div  className="bg-[#f8f6f2] text-gray-800 h-full">
       
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
                                htmlFor="destination" >Where to</label>
                                <input type="text" placeholder='eg. Destination'
                                class="w-90 px-4 py-2 border border-gray-300 rounded-xl  
                                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                outline-none transition duration-200 font-medium text-lg"
                                />
                            </div>
                            <div class="max-w-40 relative mr-4">

                                    <l
                                    abel for="checkin" class="block text-sm font-medium text-gray-700 mb-2 absolute left-3 bg-white px-1 -top-2.4x">
                                        Check-in
                                    </l>
                                    <input 
                                        type="date" 
                                        id="checkin"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
                                            focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                            outline-none transition duration-200 "
                                    />
                            </div>
                            <div class="max-w-40 relative">

                                    <label for="checkin" class="block text-sm font-medium text-gray-700 mb-2 absolute left-3 bg-white px-1 -top-2.4x">
                                        Check-out
                                    </label>
                                    <input 
                                        type="date" 
                                        id="checkin"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm 
                                            focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                                            outline-none transition duration-200"
                                    />
                            </div>
                            <div >
                                    <button className='bg-green-400 text-xl font-bold p-2.5 px-10 rounded-md ml-4'>SEARCH</button>
                            </div>
                    </div>
            </section>
            <section className='h-[80vh] '>
                <div className='flex items-center justify-center gap-8'>
                            {/* Filter */}
                        <div className='bg-red-100'>
                                <div className='flex justify-between w-80 border p-3'>
                                        <h3>FILTERS</h3>
                                        <p>CLEAR</p>
                                </div>
                                <div className='p-4 border'>
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
                        {/* Hotels Cards */}
                        <div >
                                <div className='flex gap-5 bg-white p-3 pr-10'>
									<div className='w-1/1 '>
										 	<img 
											className='rounded-lg h-55 '
											src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" />
									</div> 
									<div className=' w-full flex flex-col '>										
											<div >
												<h4>Location</h4>
												<h2>Hotel Name</h2>
												<p>4.1 rating <span>(123)</span></p>
													{/* <ul className='flex gap-4 '>
														<li>Free wifi</li>
														<li>Free Breakfast</li>
														<li>Air Conditioning</li>
													</ul> */}
											</div>
											<div className='h-1/2  content-evenly  flex justify-between mt-8'>
													<ul className='flex gap-4 '>
														<li>Free wifi</li>
														<li>Free Breakfast</li>
														<li>Air Conditioning</li>
													</ul>
												{/* <p>Price</p> */}
												<div className='items-end content-end'>
													<p>1200  /day</p>
													{/* <p>per night</p> */}
												</div>
											</div>
									</div>
								</div>
                        </div>
                </div>
            </section>

    </div>
  )
}

export default Hotel
