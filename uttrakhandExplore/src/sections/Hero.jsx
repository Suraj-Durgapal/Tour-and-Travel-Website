import React from "react";
import bgimg from "../assets/image/heroimg.jpg";

const Hero = () => {
    return (
      <div className="relative h-[90vh] w-full">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg})` }}
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-green-500/30" />
  
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-7xl font-bold">
          <h1>Discover Devभूमि Uttarakhand</h1>
          <p className="text-base pt-7 tracking-widest font-bold">
            LAND OF THE GODS
          </p>
        </div>
        
      </div>
    );
  };

export default Hero;
