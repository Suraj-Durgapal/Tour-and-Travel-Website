import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">
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
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Destinations
              </li>
              <li className="hover:text-white cursor-pointer transition">
                    Culture
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
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
                Rishikesh
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Auli
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Nainital
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Kedarnath
              </li>
            </ul>
          </div>

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

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Get updates about new adventures & offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-lg text-black focus:outline-none"
              />
              <button className="bg-green-600 px-4 rounded-r-lg hover:bg-green-700 transition">
                Go
              </button>
            </div>
          </div> */}
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
