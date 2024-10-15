"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  FaBed,
  FaSpa,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaStar,
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

const FeedbackModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, feedback: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = () => {
    onSubmit(rating, feedback);
    onClose();
    Swal.fire({
      icon: "success",
      title: "Thank you for your feedback!",
      text: "We appreciate your time and effort in providing feedback.",
      confirmButtonColor: "#3085d6",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 transform transition-all duration-300 scale-100 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Thanks for staying with us
        </h2>
        <h3 className="text-xl font-semibold text-center mb-2">
          Submit Your Feedback
        </h3>
        <h4 className="text-lg font-medium text-center mb-4">Rate Us:</h4>
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-${
                rating >= star ? "yellow-500" : "gray-300"
              } transition-colors duration-200`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
          rows={4}
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingListPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

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
      } catch {
        setError("Failed to load bookings");
        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleFeedbackClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handleFeedbackSubmit = (rating: number, feedback: string) => {
    console.log(`Feedback for booking ID ${selectedBooking?.id}:`, {
      rating,
      feedback,
    });
    setIsModalOpen(false);
  };

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
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
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
              <th className="py-3 px-6 text-left">Actions</th>
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
                <td className="py-4 px-6">
                  <FaMoneyBillWave className="inline-block mr-1 text-green-400" />
                  ${booking.amount}
                </td>
                <td className="py-4 px-6">
                  {booking.status === "Confirmed" && (
                    <button
                      onClick={() => handleFeedbackClick(booking)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                      Give Feedback
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </div>
  );
};

export default BookingListPage;
