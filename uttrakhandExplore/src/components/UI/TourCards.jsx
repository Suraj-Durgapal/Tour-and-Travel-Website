import React from 'react'
import { Link } from 'react-router-dom'

const TourCards = (pkg,index) => {
  return (
    <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition h-full flex flex-col"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>

                <p className="text-gray-500 text-sm mb-3">{pkg.duration}</p>

                <p className="text-gray-600 text-sm">{pkg.desc}</p>

                <div className="flex justify-between items-center mt-auto pt-4">
                  <div className="flex flex-col">
                    <h5>Starting Price</h5>
                    <span className="font-bold text-lg text-green-600">
                      {pkg.price}
                    </span>
                  </div>

                  <Link
                    to="/chardham"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
  )
}

export default TourCards
