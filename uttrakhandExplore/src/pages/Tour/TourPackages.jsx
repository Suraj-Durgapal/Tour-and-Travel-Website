import React from "react";
import { Link } from "react-router-dom";
import TourDetails from "./TourDetails";
import TourCards from "../../components/UI/TourCards";

const packages = [
  {
    title: "Char Dham Yatra",
    duration: "10 Days / 9 Nights",
    price: "₹32,000",
    image:
      "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Visit the sacred temples of Kedarnath, Badrinath, Gangotri and Yamunotri in a spiritual Himalayan journey.",
  },
  {
    title: "Rishikesh Adventure Tour",
    duration: "4 Days / 3 Nights",
    price: "₹9,500",
    image:
      "https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Enjoy rafting, camping, cliff jumping and yoga experiences in the adventure capital of India.",
  },
  {
    title: "Nainital & Kumaon Hills",
    duration: "5 Days / 4 Nights",
    price: "₹14,000",
    image:
      "https://images.unsplash.com/photo-1683598545969-7f560be8ac2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Explore lakes, colonial hill towns and scenic viewpoints across Kumaon region.",
  },
  {
    title: "Auli Snow Experience",
    duration: "4 Days / 3 Nights",
    price: "₹18,000",
    image:
      "https://cdn.pixabay.com/photo/2019/07/03/16/03/india-4314892_1280.jpg",
    desc: "Experience skiing, snow trekking and breathtaking Himalayan views in Auli.",
  },
];

const Nanitaltour = [
    {
      title: "Nanital with Kaichi Dham",
      duration: "4 Days / 3Nights",
      price: "₹10,000",
      image:
        "https://cdn.pixabay.com/photo/2022/11/03/18/03/lake-7568092_1280.jpg",
      desc: "Visit the sacred temples of Kedarnath, Badrinath, Gangotri and Yamunotri in a spiritual Himalayan journey.",
    },
    {
      title: "Nanital With Mukteshwar",
      duration: "4 Days / 3 Nights",
      price: "₹9,500",
      image:
        "https://images.unsplash.com/photo-1625830367488-d39bdc4ab1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11a3Rlc2h3YXJ8ZW58MHx8MHx8fDA%3D",
      desc: "Enjoy rafting, camping, cliff jumping and yoga experiences in the adventure capital of India.",
    },
]

const PilgrimageTour = [
    {
        title: "Char Dham Yatra",
        duration: "10 Days / 9 Nights",
        price: "₹32,000",
        image:
          "https://imgs.search.brave.com/7M8DELUz1wZfDYJ7XGefFbbuOj7Iap7WfkWkPFdn268/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJla3VwaW5kaWEu/Y29tL3RvdXIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDMv/Y2hhci1kaGFtLXlh/dHJhLXBhY2thZ2Vz/LmpwZw",
        desc: "Visit the sacred temples of Kedarnath, Badrinath, Gangotri and Yamunotri in a spiritual Himalayan journey.",
      },
    {
      title: "Madmaheshwar Temple Tour",
      duration: " 4 Days/ 3 Nights ",
      price: "₹12,000",
      image:
        "https://choptatourpackage.com/wp-content/uploads/2025/12/Madhmaheshwar-temple.jpg",
      desc: "Visit the sacred temples of Kedarnath, Badrinath, Gangotri and Yamunotri in a spiritual Himalayan journey.",
    },
    {
      title: "Kedarnath Package",
      duration: "3 Days / 2 Nights",
      price: "₹9,500",
      image:
        "https://images.unsplash.com/photo-1698574996391-73f103113f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Enjoy rafting, camping, cliff jumping and yoga experiences in the adventure capital of India.",
    },
    
      {
        title: "Do Dham Yatra (Kedar + Badri)",
        duration: "3 Days / 2 Nights",
        price: "₹9,500",
        image:
          "https://imgs.search.brave.com/ZnnesM2xXUadl81cV-3m-SoTCjOacAeWQ4x6rui_IVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXJwaWxvdC5pbi9p/bWFnZXMvcGFja2Fn/ZXMvYmFkcmkta2Vk/YXItaGVsaS1zbGlk/ZS1ib3guanBn",
        desc: "Enjoy rafting, camping, cliff jumping and yoga experiences in the adventure capital of India.",
      },
]

const trekTour = [
    {
        title: "Copta Chandrashila Trek",
        duration: "2Days/1Night",
        price: "₹5,000",
        image:
          "https://images.unsplash.com/photo-1699214101660-df4e21fbabcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNob3B0YXxlbnwwfHwwfHx8MA%3D%3D",
        desc: "Visit the sacred temples of Kedarnath, Badrinath, Gangotri and Yamunotri in a spiritual Himalayan journey.",
      },
      {
        title: "Kedarkantha Trek",
        duration: "4 Days / 3 Nights",
        price: "₹9,500",
        image:
          "https://images.unsplash.com/photo-1669807935395-3bc80395a951?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "The thought of covering over 18 km in just 4-5 days, gaining an altitude of over 6,000 feet, may seem daunting, but the stunning 360-degree views of various celebrated mountain peaks in Kedarkantha certainly make it worthwhile. ",
      },
    {
      title: "Gaumukh Tapovan",
      duration: "Daynight ",
      price: "₹4,000",
      image:
        "https://images.unsplash.com/photo-1738231411645-7d6ac6dd5c0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2F1bXVraCUyMFRhcG92YW58ZW58MHx8MHx8fDA%3D",
      desc: "A challenging journey to the source of the Ganges, rated 4.0 but highly sought after for spiritual and natural beauty.",
    },
    {
      title: "Har Ki Dun Trek",
      duration: "5 Days / 4 Nights",
      price: "₹9,500",
      image:
        "https://images.pexels.com/photos/12532343/pexels-photo-12532343.jpeg",
      desc: "During Har Ki Dun trek, explorers will get to witness the beautiful Tons River valley that is encircled by the highlands and dense woodlands. ",
    },
]

export default function TourPackages() {
  return (
    <div className="bg-primary">
      {/* HERO */}
      <section
        className="h-[40vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2020/06/14/15/55/landscape-5298395_1280.jpg)",
        }}
      >
        <div className="p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4 shadow-2xl shadow-black ">Uttarakhand Tour Packages</h1>
          <p className="max-w-xl">
            Explore the mountains, temples and adventure of Devbhoomi with our
            curated travel experiences.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Tour Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <TourCards
                key={index}
                image={pkg.image}
                title={pkg.title}
                duration={pkg.duration}
                desc= {pkg.desc}
                price={pkg.price}
            />
          ))}
        </div>
      </section>
      <section className="px-40">
      <h2 className="text-3xl font-bold text-start mb-12 px-15">
          Nanital Tour Packages
        </h2>
        <div className="flex gap-5 justify-start  px-15">
          {Nanitaltour.map((pkg, index) => (
              <div className="w-90 ">
                    <TourCards
                        key={index}
                        image={pkg.image}
                        title={pkg.title}
                        duration={pkg.duration}
                        desc= {pkg.desc}
                        price={pkg.price}
                    />
              </div>
             ))}
        </div>
      </section>

      {/* Pilgrimage Tour Package */}

      <section className="max-w-7xl mx-auto pt-15 px-6">
      <h2 className="text-3xl font-bold text-start mb-12 ">
          Pilgrimage Tour Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PilgrimageTour.map((pkg, index) => (
            //   <div className="w-90 ">
                    <TourCards
                        key={index}
                        image={pkg.image}
                        title={pkg.title}
                        duration={pkg.duration}
                        desc= {pkg.desc}
                        price={pkg.price}
                    />
            //   </div>
             ))}
        </div>
      </section>

    {/* Trending Trek Packages */}
    <section className="max-w-7xl mx-auto pt-15 px-6 mb-15">
        <h2 className="text-3xl font-bold  mb-12">
           Trek Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {trekTour.map((pkg, index) => (
            <TourCards
                key={index}
                image={pkg.image}
                title={pkg.title}
                duration={pkg.duration}
                desc= {pkg.desc}
                price={pkg.price}
            />
          ))}
        </div>
      </section>


      {/* WHY TRAVEL */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Travel With Us
        </h2>


        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Local Guides</h3>
            <p className="text-gray-600">
              Experienced local guides who know the mountains and culture
              deeply.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Comfortable Stay</h3>
            <p className="text-gray-600">
              Carefully selected hotels and camps for a comfortable Himalayan
              stay.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
            <p className="text-gray-600">
              Well planned itineraries ensuring safety and memorable
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">
          Plan Your Uttarakhand Journey
        </h2>

        <p className="mb-8 max-w-xl mx-auto">
          Let the Himalayas call you. Book your perfect tour package and
          experience the beauty of Devbhoomi.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-neutral-800">
          Contact Us
        </button>
      </section> */}
    </div>
  );
}
