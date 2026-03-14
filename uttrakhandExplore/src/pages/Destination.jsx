import React from "react";
// import rishi from "../assets/image/rishi.avif"

const destinations = [
  {
    name: "Nainital",
    image:
      "https://images.unsplash.com/photo-1610712147665-04400af97a32?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mussoorie",
    image:
      "https://images.unsplash.com/photo-1707993365718-c619a27a81e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzc29vcmllfGVufDB8fDB8fHww",
  },
  {
    name: "Rishikesh",
    image:
      "https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmlzaGlrZXNofGVufDB8fDB8fHww",
  },
  {
    name: "Auli",
    image:
      "https://images.unsplash.com/photo-1618661057370-7cf87dfad271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVsaXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const destiImages =[
    {
        img:"https://images.unsplash.com/photo-1706773246562-e60295a060a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVsaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        img:"https://images.unsplash.com/photo-1623997098339-48c8f3fc9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1bGl8ZW58MHx8MHx8fDA%3D"
    },
    {
        img:"https://images.unsplash.com/photo-1687511741630-18fe16e8ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHV0dHJha2hhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        img:"https://cdn.pixabay.com/photo/2014/09/30/22/16/great-falls-467599_1280.jpg"
    },
    {
        img:"https://images.pexels.com/photos/7187713/pexels-photo-7187713.jpeg"
    },
    {
        img:"https://cdn.pixabay.com/photo/2019/08/13/14/35/nature-4403565_1280.jpg"
    },
    {
        img:"https://images.unsplash.com/photo-1698574996391-73f103113f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        img:"https://imgs.search.brave.com/VGRcE0qkZVPMVDpfRCzdxQwdBf5HnvtStkeCGr3IoAI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jaGFs/YmFuamFyZS5jb20v/Y3JtL3N5c19pbWFn/ZXMvS2FpbmNoaV9E/aGFtMTc2NDkyNzU4/Ni53ZWJw"
    },
    {
        img:"https://images.pexels.com/photos/10432965/pexels-photo-10432965.jpeg"
    },
    {
        img:"https://images.pexels.com/photos/19877300/pexels-photo-19877300.jpeg"
    },
    {
        img:"https://images.unsplash.com/photo-1699214101660-df4e21fbabcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNob3B0YXxlbnwwfHwwfHx8MA%3D%3D"
        
    }
]

export default function Destinations() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section
        className="h-[40vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            // `url(${rishi})`,
            'url(https://images.unsplash.com/photo-1638876583631-e1e8e30c0e94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className="text-center  p-10 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">
            Explore Destinations of Uttarakhand
          </h1>
          <p className="max-w-2xl">
            Discover serene lakes, majestic mountains, spiritual towns and
            adventure filled landscapes across Devbhoomi.
          </p>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {place.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGION EXPLORER */}
      {/* <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1597040663342-45b6af3d91a3?q=80&w=1200"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">Garhwal Region</h3>
            <p className="text-gray-600">
              Home to sacred temples, mighty Himalayan peaks and spiritual
              towns. Garhwal includes destinations like Rishikesh, Kedarnath,
              and the Valley of Flowers.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-16">

          <div>
            <h3 className="text-3xl font-bold mb-4">Kumaon Region</h3>
            <p className="text-gray-600">
              Famous for picturesque lakes, colonial hill stations and rich
              culture. Kumaon features beautiful towns like Nainital, Almora,
              and Mukteshwar.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section> */}

      {/* EXPERIENCES */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top Experiences
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h4 className="text-xl font-semibold mb-2">River Rafting</h4>
            <p className="text-gray-600">
              Experience thrilling rafting adventures in Rishikesh.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Skiing</h4>
            <p className="text-gray-600">
              Enjoy snow sports and skiing in Auli during winters.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Trekking</h4>
            <p className="text-gray-600">
              Explore breathtaking Himalayan trekking routes.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Camping</h4>
            <p className="text-gray-600">
              Camp under the stars surrounded by nature.
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Destination Gallery
        </h2>

        {/* <div className=" column-[500p"> */}
        <div className="columns-1 sm:columns-2 md:columns-3  gap-4 p-4">
            {destiImages.map((image, index) => (
                <div key={index} className="mb-4 break-inside-avoid">
                <img
                    src={image.img}
                    alt=""
                    className="w-full rounded-md"
                />
                </div>
            ))}
        </div>
            
        {/* </div> */}
      </section>

    </div>
  );
}