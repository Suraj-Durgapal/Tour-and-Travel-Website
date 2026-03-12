import React from "react";
import { motion } from "framer-motion";

const DestinationSection = ({ title, image }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
    >
      <img src={image} alt={title} className="h-60 w-full object-cover" />
      <div className="p-5">

        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 mt-2">
          Explore the beauty of {title}
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationSection;