import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around bg-[#faf0f0b3] p-4    ">
        <div>
          <h1 className="text-4xl font-bold mr-20">Uttrakhand</h1>
        </div>
        <div>
          <ul className="flex py-2 gap-12 text-lg font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tourpackages">Tour Packages</NavLink>
            </li>
            <li>
              <NavLink to="/hotel">Hotel Booking</NavLink>
            </li>
            <li>
              <NavLink to="/destination">Destination</NavLink>
            </li>
            <li>
              <NavLink to="/culture  ">Culture</NavLink>
            </li>
            <li>
              <NavLink to="/spiritual">Spiritual</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
