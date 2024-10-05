"use client";
import React, { useEffect, useState } from "react";
import {
  FaBed,
  FaSpa,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

// Booking type interface
interface Booking {
  id: number;
  type: "Room" | "Package";
  name: string;
  status: string;
  checkInDate: string;
  checkOutDate: string;
  amount: number;
}

const BookingListPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Mock API call to fetch booking data
  useEffect(() => {
    setTimeout(() => {
      try {
        const mockBookings: Booking[] = [
          {
            id: 1,
            type: "Room",
            name: "Deluxe Room",
            status: "Confirmed",
            checkInDate: "2024-10-10",
            checkOutDate: "2024-10-15",
            amount: 500,
          },
          {
            id: 2,
            type: "Package",
            name: "Spa Package",
            status: "Pending",
            checkInDate: "2024-10-12",
            checkOutDate: "2024-10-14",
            amount: 200,
          },
          {
            id: 3,
            type: "Room",
            name: "Standard Room",
            status: "Cancelled",
            checkInDate: "2024-10-05",
            checkOutDate: "2024-10-10",
            amount: 300,
          },
        ];
        setBookings(mockBookings);
        setLoading(false);
      } catch (error) {
        setError("Failed to load bookings");
        setLoading(false);
      }
    }, 1000); // Simulating 1 second delay
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Confirmed":
        return <FaCheckCircle className="text-green-500" />;
      case "Pending":
        return <FaHourglassHalf className="text-yellow-500" />;
      case "Cancelled":
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "Room" ? (
      <FaBed className="text-blue-500" />
    ) : (
      <FaSpa className="text-pink-500" />
    );
  };

  if (loading) {
    return <div className="text-center text-xl mt-6">Loading Bookings...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-6">{error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Booking List
      </h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-center">
          You have no bookings at the moment.
        </p>
      ) : (
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">Booking</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Check-In Date</th>
              <th className="py-3 px-6 text-left">Check-Out Date</th>
              <th className="py-3 px-6 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-4 px-6 flex items-center">
                  {getTypeIcon(booking.type)}
                  <span className="ml-2 text-gray-700">{booking.name}</span>
                </td>
                <td className="py-4 px-6">{booking.type}</td>
                <td className="py-4 px-6 flex items-center">
                  {getStatusIcon(booking.status)}
                  <span className="ml-2">{booking.status}</span>
                </td>
                <td className="py-4 px-6">
                  <FaCalendarAlt className="inline-block mr-1 text-gray-400" />
                  {booking.checkInDate}
                </td>
                <td className="py-4 px-6">
                  <FaCalendarAlt className="inline-block mr-1 text-gray-400" />
                  {booking.checkOutDate}
                </td>
                <td className="py-4 px-6 font-bold">
                  <FaMoneyBillWave className="inline-block mr-1 text-green-400" />
                  ${booking.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingListPage;
