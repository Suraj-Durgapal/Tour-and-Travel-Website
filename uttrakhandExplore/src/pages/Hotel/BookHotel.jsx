import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import hotels from "../../data/hotels";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BookHotel = () => {

useEffect(() => {
        const token = localStorage.getItem("accessToken");
      
        if (!token) {
          navigate("/login");
        }
    }, []);
  const { hotelId, roomId } = useParams();

  // find hotel
  const hotel = hotels.find((h) => h.id === Number(hotelId));

  // find room inside that hotel
  const room = hotel?.rooms.find((r) => r.id === Number(roomId));

  if (!hotel) return <h1>Hotel not found</h1>;
  if (!room) return <h1>Room not found</h1>;

  const [showAlert, setShowAlert] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleBooking = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem("accessToken");
  
      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }
  
      const response = await fetch("http://localhost:8000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          hotel_id: Number(hotelId),   // 🔥 from URL
          room_id: Number(roomId), 
          hotel_name: hotel.name,
          room_type: room.type
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.detail || "Booking failed");
      }
  
      setShowAlert(true);
  
      setTimeout(() => {
        setShowAlert(false);
        navigate("/mybooking");
      }, 1500);
  
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="px-20 pt-10 bg-[#f8f6f2] py-10">
      <h2 className="font-bold text-3xl">HOTEL DETAILS</h2>
      <div className="px-20 w-full py-10 flex">
        <div className="w-1/2 pr-10 ">
          <img
            className="rounded-xl shadow-md"
            src={hotel.img[0].img1}
            alt=""
          />
        </div>
        <div className="w-full p-2">
          <div>
            <h2 className="text-xl font-medium">{hotel.name}</h2>
            <p>{hotel.location}</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
              {hotel.rating} ★
            </span>
            <span className="text-gray-500 text-sm">
              ({hotel.reviews}reviews)
            </span>
          </div>
          <div className="mt-2 flex flex-col gap-2 py-1 rounded-lg font-light">
            <span>Room Type : {room.type}</span>
            <span>Guest : {room.capacity}</span>
          </div>
          <div className="flex gap-12 pt-2 font-medium">
            <div className="leading-5">
              <h4>Check In</h4>
              <p>26 Mar, 2026</p>
              <p className="font-normal">2 PM</p>
            </div>
            <div className="leading-5">
              <h4>Check Out</h4>
              <p>27 Mar, 2026</p>
              <p className="font-normal">10 AM</p>
            </div>
            <div className="leading-5">
              <h4>No fo Nights</h4>
              <p className="font-normal">1 Night</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        {/* <div className="bg-white p-7 rounded-xl shadow-lg w-[30%]">
          <div>
            <h2 className="text-xl font-semibold">Price Summary</h2>
          </div>
          <div class="border-t border-neutral-400 my-4 "></div>
        </div> */}
        <div className="mx-20 w-[50%] bg-white p-7 rounded-xl shadow-lg shadow-neutral-300">
        <h2 className="text-xl font-medium">Enter Billing Detials</h2>
          <div className="flex gap-4 pt-5">
            <div className="w-[45%]">
              <label htmlFor="name" className="font-medium">
                First Name
              </label>
              <input
                className="border border-neutral-400 rounded-md p-2 w-full mt-1"
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="name">
                Last Name
              </label>
              <input
                className=" border-neutral-400 rounded border p-2 w-full mt-1"
                type="text"
                name="lastName"
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[45%] pt-4">
              <label className="font-medium" htmlFor="name">
                Email
              </label>
              <input
                className=" border-neutral-400 rounded  border p-2 w-full mt-1"
                id="name"
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="pt-4 w-[40%] ">
              <label className="font-medium" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                className=" border-neutral-400 rounded   border p-2 w-full mt-1 "
                id="mobile"
                name="mobile"
                onChange={handleChange}
                type="tel"
                placeholder="+91 123456-7890"
                pattern="^\+?[1-9]\d{1,14}$"
                required
              />
            </div>
          </div>
          <div className="pt-4 w-[87%]">
            <label className="font-medium" htmlFor="address">
              Address
            </label>
            <input
              className="border-neutral-400 rounded   border p-2 w-full mt-1"
              type="text"
              id="street"
              placeholder="Street address"
            />
            <div className="flex gap-8 pt-4 ">
              <div className="font-medium ">
                <label className="font-medium" htmlFor="city">
                  City
                </label>
                <input
                  className="border-neutral-400 rounded   border p-2 w-full mt-1"
                  type="text"
                  id="city"
                  placeholder="City"
                />
              </div>
              <div>
                {/* <label
                                className='font-medium'
                                htmlFor="state">State</label>
                                <input
                                className='border-neutral-400 rounded   border p-2 w-full mt-1'
                                type="text" id="state" placeholder="State/Province"/> */}
                <label className="font-medium " htmlFor="state">
                  State
                </label>
                <select
                  className="border-neutral-400 rounded   border p-2 mt-1"
                  name="state"
                  id="state"
                >
                  <option value="">Select a State</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
              </div>
              <div>
                <label className="font-medium" htmlFor="Postal">
                  Postal Code
                </label>
                <input
                  className="border-neutral-400 rounded   border p-2 w-full mt-1"
                  type="text"
                  id="postal"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            {/* <p className="mt-6 pl-1 text-lg font-normal opacity-80 p-1 ">
              Price - ₹4030{" "}
            </p> */}
            <div className=" text-lg font-medium text-center bg-green-400 p-3 rounded-xl cursor-pointer hover:bg-green-500 tansition duration-200 mt-4">Submit
            </div>

            {showAlert && (
              <div className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center w-80">
                  <h2 className="text-xl font-bold text-green-600 mb-2">
                    Booking Confirmed ✅
                  </h2>
                  <p className="text-gray-600">
                    Your hotel has been successfully booked.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white  rounded-xl shadow-lg w-[30%] h-fit pb-3">
          <div className="p-4">
            <h2 className="text-xl font-semibold">Price Summary</h2>
          </div>
          <div className="border-t border-neutral-400 "></div>
          <div className="p-2 font-medium text-lg">
            <div className="flex justify-between px-4 mr-5">
              <div>
                <h3>{room.type}</h3>
                <p className="text-sm font-normal">(1 Night)</p>
                <p className="text-sm font-normal">Base Price</p>
              </div>
              <div className="pt-9 font-normal">
                <p>₹5,000</p>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-400 "></div>
          <div className="p px-6  flex pt-5 justify-between mr-5 text-lg">
            <h2>Price After Discount</h2>
            <p className="text-green-500">₹3,500</p>
          </div>
          <div className=" px-6  flex justify-between mr-5 text-lg pb-2">
            <h2>Tax include</h2>
            <p>+₹530</p>
          </div>
          <div className="border-t border-neutral-400 pt-5"></div>
          <div className="p-2 px-8 text-lg  flex justify-between mr-5 flex-wrap w-full">
            <h2>Total Amount To Be Paid</h2>
            <p className=" font-medium w-1/2 text-end">₹4030</p>
           
          </div>
          
          
        </div>
      
      </div>
      <div className=" px-20 w-[50%] mt-10 "> 
        <button
            onClick={handleBooking} 
            className="font-bold text-2xl bg-green-500 w-full text-white py-4 ml-20 rounded-lg  hover:bg-green-600 transition duration-300 mt-1"> Book Now </button>
    </div>
    </div>
  );
};

export default BookHotel;
