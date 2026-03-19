import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  if (bookings.length === 0) {
    return (
        <div className="pt-15">
        <h2 className="text-4xl font-bold text-center">My Booking</h2>
        <div className="p-5  w-full flex justify-center  h-100 pt-10">
            <h2 className="text-xl font-semibold text-gray-500">
            No Bookings Found 😕
            </h2>
        </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5 space-y-4">

      <h2 className="text-2xl font-bold text-green-600 mb-4">All Bookings</h2>

      {bookings.map((booking, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <span className="font-medium text-gray-600">Name:</span>{" "}
              <span className="text-gray-800">`{booking.firstName} {booking.lastName}`</span>
            </div>
            {/* <div>
              <span className="font-medium text-gray-600">Last Name:</span>{" "}
              <span className="text-gray-800">{booking.lastName}</span>
            </div> */}
            <div>
              <span className="font-medium text-gray-600">Email:</span>{" "}
              <span className="text-gray-800">{booking.email}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Mobile:</span>{" "}
              <span className="text-gray-800">{booking.mobile}</span>
            </div>
          </div>

          <button
            onClick={() => {
              const updated = bookings.filter((_, i) => i !== index);
              localStorage.setItem("bookings", JSON.stringify(updated));
              setBookings(updated);
            }}
            className="mt-4 md:mt-0 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;