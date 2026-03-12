import React from 'react'

const TourDetails = () => {

    //  
    const tourdet = [{
        img : "https://images.unsplash.com/photo-1665129967399-f28a228d064e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdGlvbmFsJTIwcGFyayUyMGluZGlhfGVufDB8fDB8fHww",
        location :    "Jim Corbet",        
        duration: "4Days/3 N",
        plan1: "Day1: Pickup and Arrive To Bhimtal",
        plan2: "Day2: Morning Breakfast and head toward the Kaichi Dham, Explore nearby places and return to hotel",
        plan3: "Day3:  Morning Trek or Visit Mukteshwar",
        plan4: " Day4: Return To the Our Camp",
    },{
        img : "da dja dna",
        location :  "Tungnath",        
        duration: "3Days/2N",
        plan1: "Day1: Pickup and Move to Chopta",
        plan2: "Day2: Early Morning trek 3km to the temple and then again trek for Chandrasilla",
        plan3: "Day3:  Morning Breakfast and come alogn visiting the places in our route",
        
    },
    {
        img : "da dja dna",
        location :    "Kaichi Dham",        
        duration: "4Days/3 N",
        plan1: "Day1: Pickup and Arrive To Bhimtal",
        plan2: "Day2: Morning Breakfast and head toward the Kaichi Dham, Explore nearby places and return to hotel",
        plan3: "Day3:  Morning Trek or Visit Mukteshwar",
        plan4: " Day4: Return To the Our Camp",
    }
]
  return (
    <div className="bg-gray-100">
        
      {/* HERO */}
        <section
            className="h-[40vh] flex items-center justify-center bg-cover bg-center text-white"
            style={{
            backgroundImage:
                "url(https://images.unsplash.com/photo-1647766888470-c77dc3df2f4f?q=80&w=1511&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="p-10 rounded-xl text-center">
            <h1 className="text-5xl font-bold mb-4">
                Uttarakhand Tour Packages
            </h1>
            <p className="max-w-xl">
                Explore the mountains, temples and adventure of Devbhoomi
                with our curated travel experiences.
            </p>
            </div>
        </section>

        {/* Include and Exclude */}
        {/* <section>
            <div className='flex gap-5 p-8'>
                <h1>All Tour Packages Include & Exclude</h1>
                <div>
                    <h3>Include</h3>
                    <ol>
                        <li>Acommodation</li>
                        <li>Breakfast & Dinner</li>
                        <li>Pickup & Drop</li>
                    </ol>
                </div>
                <div>
                    <h3>Exclude</h3>
                    <ol>
                        <li>Personal expenses.</li>
                        <li>Entry tickets.</li>
                        <li>Personal insurance and medical expenses</li>
                    </ol>
                </div>
            </div>
        </section> */}

        {/* Tour Details Card */}
        <section className="max-w-7xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-12 ">
            Featured Tour Packages
            </h2>
            <div className=' bg-teal-400 p-2 mb-10 rounded-md shadow-sm'>
                <h1 className='font-medium text-xl '>All Tour Packages :</h1>
                <div className='flex gap-5 justify-around pt-2'>
                    
                <div className=' p-1     rounded-md '>
                    <h3 className='text-xl font-medium'>Include</h3>
                    <ol className='list-disc pl-5 pt-1'>
                        <li>Acommodation</li>
                        <li>Breakfast & Dinner</li>
                        <li>Pickup & Drop</li>
                    </ol>
                </div>
                <div className='p-1 rounded-md'>
                    <h3  className='text-xl font-medium'>Exclude</h3>
                    <ol className='list-disc pl-5 pt-1'>
                        <li>Personal expenses.</li>
                        <li>Entry tickets.</li>
                        <li>Personal insurance and medical expenses</li>
                    </ol>
                </div>
                <div >
                    <h3 className='text-xl font-medium'>Policies</h3>
                    <ol className='list-disc pl-5 pt-1'>
                        <li>Acommodation</li>
                        <li>Breakfast & Dinner</li>
                        <li>Pickup & Drop</li>
                    </ol>
                </div>
                </div>
            </div>

            <div className='flex gap-4 ' >
                {/* className='flex  flex-col bg-white p-2'  */}
                    {tourdet.map((data)=>(
 
                  <div className='bg-white p  shadow-md '>
                    <div>
                        <img 
                        className='h-48 w-full '
                        src={data.img} alt="" />
                    </div>
                    <div className='p-2'>
                        <h1
                        className='text-2xl font-medium pt-3'
                        >{data.location}</h1>
                        <p className="text-gray-500 text-sm mb-3 pl-1">
                           {data.duration}
                         </p>



                         {/* <div>
                            <div>
                                <h1 className='font-medium text-lg'>Package Itenary :</h1>
                                <div className='opacity-60'>
                                    <p className=''>{data.plan1}</p>
                                    <p>{data.plan2}</p>
                                    <p>{data.plan3}</p>
                                    <p>{data.plan4}</p>
                                </div>
                            </div >
                            <hr  className='w-90 mt-5'/>
                            <div>
                                <h2>Price</h2>
                            </div>
                         </div> */}      
                    </div>
                    </div>
                ))}
                {/* </div> */}
                
                </div>
                {/* <div className='flex  flex-col bg-white p-2'>
                    <div >
                        <img 
                        className='h-48 w-full rounded-md'
                        src="https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200" alt="" />
                    </div>
                    <div>
                        <h1
                        className='text-2xl font-medium pt-3'
                        >Kaichi Dhaam</h1>
                        <p className="text-gray-500 text-sm mb-3 pl-1">
                            3 Days/2 Nights
                         </p>
                         <div>
                            <div>
                                <h1 className='font-medium text-lg'>Package Itenary</h1>
                                <div className='opacity-60'>
                                    <p className=''>Day1: Pickup and Arrive To Bhimtal</p>
                                    <p>Day2: Morning Breakfast and head toward the Kaichi Dham, Explore nearby places and return to hotel</p>
                                    <p>Day3: Morning Trek or Visit Mukteshwar </p>
                                    <p>Day4: Return To the Our Camp</p>
                                </div>
                                
                            </div>
                         </div>

                    </div>
                </div> */}
                {/* <div className='flex  flex-col bg-white p-2'>
                    <div >
                        <img 
                        className='h-48 w-full rounded-md'
                        src="https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200" alt="" />
                    </div>
                    <div>
                        <h1
                        className='text-2xl font-medium pt-3'
                        >Kaichi Dhaam</h1>
                        <p className="text-gray-500 text-sm mb-3 pl-1">
                            3 Days/2 Nights
                         </p>
                         <div>
                            <div>
                                <h1 className='font-medium text-lg'>Package Itenary</h1>
                                <div className='opacity-60'>
                                    <p className=''>Day1: Pickup and Arrive To Bhimtal</p>
                                    <p>Day2: Morning Breakfast and head toward the Kaichi Dham, Explore nearby places and return to hotel</p>
                                    <p>Day3: Morning Trek or Visit Mukteshwar </p>
                                    <p>Day4: Return To the Our Camp</p>
                                </div>
                                
                            </div>
                         </div>

                    </div>
                </div> */}
            {/* </div> */}
        </section>
    </div>
  )
}

export default TourDetails
