import React from 'react'
import { useParams } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { PiFanDuotone } from "react-icons/pi";

const HotelDetails = () => {
    const { id } = useParams();
    return (
        <div className=' w-full bg-[#f8f6f2]'>
            
                <div  className='flex w-full gap-1 p-3'>
                    <div className='w-1/2'>
                            <img src="https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg" alt="" />
                    </div>
                    <div className='w-1/2'>
                            <img src="https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg" alt="" />
                    </div>
                </div>

                {/* Hotel Details */}
                <section className='py-3 w-full  mt-5 px-20'>
                    <div className='px-20'>
                        <div className='flex w-full p-2 '>           
                                <div className='flex w-1/1 p-4 justify-between '>
                                    <div className='w-1/2'>
                                        <h1 className='text-3xl font-medium'>Mountain View Resort</h1>
                                        <p>Nanital, Uttrakhand</p>
                                        <div>
                                                {/* <h3>Amenties</h3> */}
                                        </div>
                                        <div className='pt-10 w-full'>
                                            {/* <div className=''> */}
                                                <h3 className='text-2xl font-medium'>Amenties</h3>
                                                <ul className="flex flex-wrap gap-2 mt-3 text-md">
                                                    {/* <FaWifi /> */}
                                                    <div className='flex items-center '>
                                                        <FaWifi />
                                                        <li className="px-2 py-1 rounded ">
                                                        Free Wifi</li>
                                                    </div>
                                                    <div className='flex items-center '>
                                                    
                                                    <div className='flex items-center '>
                                                            <PiFanDuotone />
                                                            <li className="px-2 py-1 rounded ">
                                                            Air Conditioning</li>
                                                        </div>                                                 
                                                    </div>
                                                     
                                                    <li className="px-2 py-1 rounded w-[32%]">Air Conditioning</li>
                                                    <li className="px-2 py-1 rounded w-[32%]">Free Breakfast</li>
                                                    <li className="px-2 py-1 rounded w-[32%]">Club House</li>
                                                </ul>
                                            {/* </div>   */}
                                        </div>
                                        <div className='pt-10'>
                                              <h3 className='text-xl font-medium'>About The Hotel</h3>
                                              <p>'Bheemtals serene lake, Kainchi Dhams spiritual charm and lush landscapes surround this Nainital retreat.'<br />
                                                    About Property
                                                    Enjoy your stay at Super Collection O Bhowali Nainital Near Graphic Era Hill University, where practicality meets comfort in the serene surroundings of Nainital.</p>
                                        </div>
                                    </div>
                                    <div className='mr-20 w-1/3'>
                                        <p className="bg-green-600 text-white px-1 py-1 rounded text-sm font-medium w-13 text-center"> 4.3★</p>
                                        <p>(30 reviews)</p>
                                    </div>
                                </div>
                                <div className='flex  justify-between p-4 w-1/3 pr-20 bg-white font-medium rounded-md shadow-md h-50 flex-wrap'>
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
                                </div>
                        </div>
                        {/* <div className='px-20 '>
                                     <h3 className='text-xl font-medium'>Amenties</h3>
                        </div>   */}
                    </div>
                        {/* <div className='px-20 p-2'> 
                                <div className='px-20 '>
                                     <h3 className='text-xl font-medium'>Amenties</h3>
                                </div>
                        </div> */}

                </section>
        </div>
    )
}

export default HotelDetails
