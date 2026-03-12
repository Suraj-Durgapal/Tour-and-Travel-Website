import React from "react";
import { NavLink } from "react-router-dom";
import TourPackages from "../pages/Tour/TourPackages";

const adventures = [
  {
    id: 1,
    title: "River Rafting in Rishikesh",
    image:
      "https://images.unsplash.com/photo-1650551823793-6e358b9d74a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Rishikesh",
  },
  {
    id: 2,
    title: "Chopta Chandrashila Trek",
    image:
      "https://images.unsplash.com/photo-1657215756064-a1cec8616e80?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Chopta",
  },
  {
    id: 3,
    title: "Char Dham Yatra",
    image:
      "https://images.unsplash.com/photo-1634486725508-beeb211e4dc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Auli",
  },
  {
    id: 4,
    title: "Paragliding in Bhimtal",
    image:
      "https://media.istockphoto.com/id/1485967690/photo/paraglider-flying-over-town-and-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=wKC4oUqYelknIhVaDENi7DNw3jMVxObaMk3iEI4whn0=",
    location: "Bhimtal",
  },
];

const AdventureSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Tour Packages</h2>
          <p className="text-gray-600 mt-3">
            Explore thrilling experiences in the land of mountains
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {adventures.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-2 mb-4">{item.location}</p>

                <NavLink
                  to="/tourpackages"
                  element={<TourPackages />}
                  className=" w-full bg-green-600 text-white py-2 px-19 rounded-lg hover:bg-green-700 transition"
                >
                  Explore Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
