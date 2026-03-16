import React from "react";
// import DestinationSection from "./DestinationSection"
import nani from '../assets/image/choliya.webp'
import mussor from '../assets/image/mussor.avif'
import kedar from '../assets/image/kedarbaba.avif'
import { motion } from "framer-motion";

const places = [
  {
    id: 1,
    title: "Nainital",
    image: nani,
  },
  {
    id: 2,
    title: "Mussoorie",
    image: mussor,
  },
  {
    id: 3,
    title: "Kedarnath",
    image: kedar,
  },
];

const Desti = ({ title, image }) => {
  return (
    <div >
        <div >
            {/* <div className=" border-neutral-400 w-90"></div> */}
            {/* <hr  className="w-20vw"/> */}
            
            <hr  className="w-[85%] mx-25"/>
            <div className="p-20 pt-1 pb-18 ">
            <h1 className="font-bold text-6xl px-10 pt-14 pb-5">POPULAR DESTINATION</h1>
                <div className="grid md:grid-cols-3 gap-8 p-10">
                {places.map((items, index) => (
                    <motion.div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={items.image} alt={items.title} className="h-60 w-full object-cover" />
                    <div className="p-5">
              
                      <h3 className="text-xl font-semibold">{items.title}</h3>
                      <p className="text-gray-500 mt-2">
                        Explore the beauty of {items.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Desti;