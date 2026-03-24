import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const res = await fetch("http://localhost:8000/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setBookings(data);
    };

    fetchBookings();
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

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* <img src={booking.hotel.img[0].img1} alt="" /> */}
            <div>
              <span className="font-medium text-gray-600">Hotel ID:</span>{" "}
              <span className="text-gray-800">{booking.hotel_id}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Room ID:</span>{" "}
              <span className="text-gray-800">{booking.room_id  }</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Room Type:</span>{" "}
              <span className="text-gray-800">{booking.room_type}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Booked At:</span>{" "}
              <span className="text-gray-800">{new Date(booking.created_at).toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;