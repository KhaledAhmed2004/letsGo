"use client";
import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { FaBed, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Importing additional icons

// Sample room data
const roomData = [
  {
    id: 1,
    name: "Single Room",
    type: "Single",
    price: 50,
    available: true,
    description: "Cozy room perfect for a solo traveler.",
  },
  {
    id: 2,
    name: "Double Room",
    type: "Double",
    price: 80,
    available: false,
    description: "Spacious room for two with a beautiful view.",
  },
  {
    id: 3,
    name: "Suite",
    type: "Suite",
    price: 150,
    available: true,
    description: "Luxury suite with all premium facilities.",
  },
];

const RoomManagementPage = () => {
  const [rooms] = useState(roomData);

  useEffect(() => {
    // Example: Fetch rooms from an API and update state
    // fetch("/api/rooms")
    //   .then((response) => response.json())
    //   .then((data) => setRooms(data))
    //   .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Room Management
      </h1>

      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
            <th className="py-3 px-6 text-left">Room Name</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Price per Night</th>
            <th className="py-3 px-6 text-left">Availability</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr
              key={room.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="py-4 px-6 flex items-center">
                <FaBed className="text-blue-500" />
                <span className="ml-2 text-gray-700">{room.name}</span>
              </td>
              <td className="py-4 px-6">{room.type}</td>
              <td className="py-4 px-6">${room.price}</td>
              <td className="py-4 px-6 flex items-center">
                {room.available ? (
                  <>
                    <FaCheckCircle className="text-green-500 mr-1" />
                    <span className="text-green-500">Available</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="text-red-500 mr-1" />
                    <span className="text-red-500">Unavailable</span>
                  </>
                )}
              </td>
              <td className="py-4 px-6">{room.description}</td>
              <td className="py-4 px-6 flex justify-center">
                <button className="text-blue-500 hover:underline mr-2 flex items-center">
                  <HiPencil className="mr-1" />
                  Edit
                </button>
                <button className="text-red-500 hover:underline flex items-center">
                  <HiTrash className="mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomManagementPage;
