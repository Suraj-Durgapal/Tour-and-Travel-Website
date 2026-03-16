import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Uttarakhand</h2>
            <p className="text-sm leading-6">
              Explore the beauty of mountains, rivers, and forests. Your gateway
              to thrilling experiences in Uttarakhand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition">
                    <Link to="/">Home</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to="/tourpackages">Tour Packages</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to="/hotel">Hotel Booking</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to="/destination">Destinations</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to="/culture">Culture</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Hotel Booking*/}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
                Tour Packages
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition">
              <Link to="/tourpackages">Popular Tour Packages</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <Link to='/destination'>Nanital Tour Package</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to='/destination'>Pilgrimage Tour Package</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to='/destination'>Trek Packages</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition">
                <Link to='/destination'>Rishikesh</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                <Link to='/destination'>Auli</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to='/destination'>Nainital </Link>
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    <Link to='/destination'>Kedarnath </Link>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}

          {/* //Culture */}
          <div> 
            <h3 className="text-lg font-semibold text-white mb-4">
              Culture
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer transition">
                Folk Dances
              </li>
              <li className="hover:text-white cursor-pointer transition">
               Traditional Cuisine
              </li>
              <li className="hover:text-white cursor-pointer transition">
              Art & Craft of Uttarakhand
              </li>
              {/* <li className="hover:text-white cursor-pointer transition">
                Kedarnath
              </li> */}
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
