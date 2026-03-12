import React from 'react'
import TourCardsHero from '../../../components/UI/TourCardsHero'




const CharDham = () => {

    const charDhamItenary =[
        {
            dayplan : "Day 01:- Delhi – Haridwar (220 km & 6 Hrs)",
            detail : "Begin your journey with a drive from Delhi to Haridwar. Check into the hotel upon arrival. In the evening, witness the mesmerizing Ganga Aarti at Har Ki Pauri. Overnight stay at the hotel."
        },
        {
            dayplan : "Day 02:- Haridwar – Barkot (210 km & 7 Hrs)",
            detail : "After breakfast, proceed to Barkot, the gateway to Yamunotri. En route, visit Kempty Falls. Check into the hotel and relax. Overnight stay at Barkot."
        },
        {
            dayplan : "Day 03:- Barkot – Yamunotri – Barkot (36 km Drive & 6 Km Trek)",
            detail : "Post breakfast, drive to Janki Chatti and start the trek to Yamunotri, the source of the Yamuna River. Offer prayers and take a holy dip in the Surya Kund. Return to Barkot for an overnight stay."
        },
        {
            dayplan : "Day 04:- Barkot – Uttarkashi (100 km & 4 Hrs)",
            detail : "Proceed to Uttarkashi after breakfast. Visit the famous Kashi Vishwanath Temple upon arrival. Check into the hotel and relax. Overnight stay at Uttarkashi. "
        },
        {
            dayplan : "Day 05:- Uttarkashi – Gangotri – Uttarkashi (100 km Each Side)",
            detail : "Embark on a scenic drive to Gangotri. Offer prayers at the sacred shrine and enjoy the serene beauty of the Bhagirathi River. Return to Uttarkashi for an overnight stay."
        },
        {
            dayplan : "Day 06:- Uttarkashi – Guptkashi (220 km & 9 Hrs)",
            detail : "Drive to Guptkashi via scenic routes. Upon arrival, check into the hotel. Rest and prepare for your journey to Kedarnath. Overnight stay at Guptkashi."
        },
        {
            dayplan : "Day 07:- Guptkashi – Kedarnath (30 km Drive & 16 km Trek)",
            detail : "Travel to Gaurikund and begin the trek to Kedarnath. After reaching, offer prayers at the holy Kedarnath Temple. Overnight stay at Kedarnath"
        },
        {
            dayplan : "Day 08:- Kedarnath – Guptkashi (16 km Trek & 30 km Drive)",
            detail : "After attending morning prayers, trek back to Gaurikund. Drive to Guptkashi and check into the hotel. Overnight stay at Guptkashi."
        },
        {
            dayplan : "Day 09:- Guptkashi – Badrinath (190 km & 8 Hrs)",
            detail : "After breakfast, proceed to Badrinath. Check into the hotel. In the evening, visit the Badrinath Temple for darshan. Overnight stay at Badrinath.            "
        },
        {
            dayplan : "Day 10:- Badrinath Sightseeing – Rudraprayag (160 km & 6 Hrs)",
            detail : "Visit the sacred Tapt Kund, Brahma Kapal, and Mana Village. Later, drive to Rudraprayag. Check into the hotel and stay overnight."
        },
        {
            dayplan : "Day 11:- Rudraprayag – Rishikesh (380 km & 10 Hrs)",
            detail : "After breakfast, drive to Rishikesh. Visit Ram Jhula, Laxman Jhula, and Parmarth Niketan. Attend the evening Ganga Aarti. And Comeback to Delhi"
        },
    
    
    
    ]
  return (
    <div className=' h-full'>
        <section
        className="h-[40vh] flex items-center justify-center bg-cover bg-center text-white mb-10"
        style={{
          backgroundImage:
            "url(https://imgs.search.brave.com/0kOoelTfiUlQuieDIcJ9AVdUCOBxFTwReGxlgOcRAyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90LmV1/Y2RuLmluL3RvdXJp/c20vbGcvY2hhci1k/aGFtLWJpb21ldHJp/Yy1yZWdpc3RyYXRp/b24tNjYzNDg4OS53/ZWJw )",
        }}
      >
        <div className="p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">Char Dham Yatra</h1>
          <p className="max-w-xl">
          Embark on the Char Dham Yatra in Uttarakhand — visit Yamunotri, Gangotri, Kedarnath & Badrinath through breathtaking Himalayan terrains.
          </p>
        </div>
      </section>
      <TourCardsHero />

      <div>
            <div>
                
            </div>
      </div>

      <section>
            <div className='px-15 mx-30 mb-20'>
                <h2 className='text-3xl font-semibold pb-5 bg-neutral-100 p-3'>Overview</h2>
                <p className='p-3'>The <span className=' font-medium'>Char Dham Yatra</span> in Uttarakhand is one of the most sacred pilgrimages in India. It includes visits to four holy temples — Yamunotri Temple, Gangotri Temple, Kedarnath Temple, and Badrinath Temple.
Every year thousands of devotees undertake this spiritual journey through the Himalayas seeking blessings and inner peace.
The yatra combines devotion, natural beauty, and an unforgettable pilgrimage experience.</p>
                <div className=' bg-neutral-100 font-semibold p-3 mt-3'>
                    <h2 className='text-2xl'>Char Dham Yatra Tour Package Itinerary: (11 Nights/12 Days)</h2>
                    <h3 className='text-md'>(Delhi-Yamunotri-Gangotri-Kedarnath-Badrinath-Delhi)</h3>
                </div>
                <div className='rounded-md p-2 mt-5 pb-4 shadow-2xl '>
                    { charDhamItenary.map((plan,index)=>(
                    <div className=' mb-7 text-lg'>
                        {/* <span>{key=index}</span> */}
                        <h1 className='font-semibold '>{plan.dayplan}</h1>
                        <p className='opacity-80'>{plan.detail}</p>
                    </div>
                    ))}
                </div>
           


            </div>
      </section>
    </div>
  )
}

export default CharDham
