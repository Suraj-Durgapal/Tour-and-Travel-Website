import React from 'react'
import histimg from '../assets/image/histimg.jpg'

const History = () => {
  return (
    <div>
            <div className='py-15 pb-20  px-25 bg-gray-100 '>
                <h1 className='text-7xl font-medium pl-4'>History </h1>
                <div className='flex '>
                    <div className='w-1/2 pr-10 p-4 pt-10 font-medium '>
                            <p>The history of Uttarakhand dates back to the Vedic age, where it is mentioned in ancient Hindu scriptures like the Vedas and the Mahabharata. It is believed that sages and saints meditated in these sacred mountains, and many holy rivers including the Ganga and Yamuna originate from here.</p>
                            <p className='pt-5 pb-5'>Throughout history, the region was ruled by several dynasties including the Katyuri dynasty and the Chand dynasty, who built magnificent temples and contributed to the region’s rich architectural heritage. Later, parts of Uttarakhand came under the Gurkha rule in the 18th century before being taken over by the British in 1815 after the Anglo-Nepalese War.</p>
                            <p>
                            During British rule, hill stations like Nainital and Mussoorie were developed as summer retreats due to the region’s pleasant climate and scenic beauty.After independence, Uttarakhand remained part of Uttar Pradesh until it became the 27th state of India on 9 November 2000.
                            Today, Uttarakhand stands as a symbol of devotion, adventure, and natural wonder — blending ancient traditions with modern aspirations.
                            </p>
                    </div>
                    <div className='w-1/2 bg-white py-2  rounded-xl'>
                            <img                           
                            src={histimg} alt="" />
                    </div>

                </div>
            </div>
    </div>
  )
}

export default History
