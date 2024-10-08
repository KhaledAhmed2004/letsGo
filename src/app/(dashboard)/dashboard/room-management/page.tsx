// "use client";
// import React, { useEffect, useState } from "react";
// import { HiPencil, HiTrash } from "react-icons/hi"; // Importing Edit and Delete icons

// // Sample room data (could be fetched from API later)
// const roomData = [
//   {
//     id: 1,
//     name: "Single Room",
//     type: "Single",
//     price: 50,
//     available: true,
//     description: "Cozy room perfect for a solo traveler.",
//   },
//   {
//     id: 2,
//     name: "Double Room",
//     type: "Double",
//     price: 80,
//     available: false,
//     description: "Spacious room for two with a beautiful view.",
//   },
//   {
//     id: 3,
//     name: "Suite",
//     type: "Suite",
//     price: 150,
//     available: true,
//     description: "Luxury suite with all premium facilities.",
//   },
// ];

// const RoomManagementPage = () => {
//   const [rooms, setRooms] = useState(roomData); // Initially set sample data

//   useEffect(() => {
//     // Example: Fetch rooms from an API and update state
//     // fetch("/api/rooms")
//     //   .then((response) => response.json())
//     //   .then((data) => setRooms(data))
//     //   .catch((error) => console.error("Error fetching rooms:", error));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
//           Room Management
//         </h1>

//         {/* Table for displaying room list */}
//         <table className="min-w-full table-auto">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="py-3 px-4">Room Name</th>
//               <th className="py-3 px-4">Type</th>
//               <th className="py-3 px-4">Price per Night</th>
//               <th className="py-3 px-4">Availability</th>
//               <th className="py-3 px-4">Description</th>
//               <th className="py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map((room) => (
//               <tr
//                 key={room.id}
//                 className="border-b text-gray-700 hover:bg-gray-100"
//               >
//                 <td className="py-3 px-4">{room.name}</td>
//                 <td className="py-3 px-4">{room.type}</td>
//                 <td className="py-3 px-4">${room.price}</td>
//                 <td className="py-3 px-4">
//                   {room.available ? (
//                     <span className="text-green-500">Available</span>
//                   ) : (
//                     <span className="text-red-500">Unavailable</span>
//                   )}
//                 </td>
//                 <td className="py-3 px-4">{room.description}</td>
//                 <td className="py-3 px-4 flex justify-center">
//                   <button className="text-blue-500 hover:underline mr-2 flex items-center">
//                     <HiPencil className="mr-1" />
//                     Edit
//                   </button>
//                   <button className="text-red-500 hover:underline flex items-center">
//                     <HiTrash className="mr-1" />
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RoomManagementPage;
"use client";
import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi"; // Importing Edit and Delete icons

// Sample room data (could be fetched from API later)
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
  const [rooms] = useState(roomData); // Use only rooms, no need for setRooms

  useEffect(() => {
    // Example: Fetch rooms from an API and update state
    // fetch("/api/rooms")
    //   .then((response) => response.json())
    //   .then((data) => setRooms(data))
    //   .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Room Management
        </h1>

        {/* Table for displaying room list */}
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4">Room Name</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Price per Night</th>
              <th className="py-3 px-4">Availability</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr
                key={room.id}
                className="border-b text-gray-700 hover:bg-gray-100"
              >
                <td className="py-3 px-4">{room.name}</td>
                <td className="py-3 px-4">{room.type}</td>
                <td className="py-3 px-4">${room.price}</td>
                <td className="py-3 px-4">
                  {room.available ? (
                    <span className="text-green-500">Available</span>
                  ) : (
                    <span className="text-red-500">Unavailable</span>
                  )}
                </td>
                <td className="py-3 px-4">{room.description}</td>
                <td className="py-3 px-4 flex justify-center">
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
    </div>
  );
};

export default RoomManagementPage;
