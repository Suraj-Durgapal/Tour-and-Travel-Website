import React from 'react'

const TourCardsHero = () => {
  return (
    <div className=' bg-green-400 p-2 mb-10  shadow-sm'>
                {/* <h1 className='font-medium text-xl pl-25'>All Tour Packages :</h1> */}
                <div className='flex gap-5 justify-around pt-2 px-10'>
                    
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
  )
}

export default TourCardsHero
