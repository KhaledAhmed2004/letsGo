// "use client";
// import React, { useState } from "react";

// const App = () => {
//   const [filters, setFilters] = useState({
//     minPrice: 0,
//     maxPrice: 500,
//     roomType: "",
//   });

//   const rooms = [
//     {
//       id: 1,
//       name: "Deluxe Room",
//       description:
//         "A spacious room with stunning views and luxurious amenities.",
//       price: 120,
//       image: "https://via.placeholder.com/300x200?text=Deluxe+Room",
//       type: "Deluxe",
//     },
//     {
//       id: 2,
//       name: "Standard Room",
//       description: "A cozy room perfect for a short stay.",
//       price: 80,
//       image: "https://via.placeholder.com/300x200?text=Standard+Room",
//       type: "Standard",
//     },
//     {
//       id: 3,
//       name: "Suite",
//       description: "An elegant suite with a separate living area.",
//       price: 200,
//       image: "https://via.placeholder.com/300x200?text=Suite",
//       type: "Suite",
//     },
//     {
//       id: 4,
//       name: "Family Room",
//       description: "A large room suitable for families with children.",
//       price: 150,
//       image: "https://via.placeholder.com/300x200?text=Family+Room",
//       type: "Family",
//     },
//   ];

//   // Function to handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   // Function to filter rooms based on selected filters
//   const filteredRooms = rooms.filter((room) => {
//     const isPriceInRange =
//       room.price >= filters.minPrice && room.price <= filters.maxPrice;
//     const isTypeMatch =
//       filters.roomType === "" || room.type === filters.roomType;

//     return isPriceInRange && isTypeMatch;
//   });

//   return (
//     <section className="dark:bg-gray-800">
//       {" "}
//       <div className="container mx-auto p-4 bg-white dark:bg-gray-800">
//         <h1 className="text-4xl font-bold text-center my-8 text-gray-800 dark:text-white">
//           Our Rooms
//         </h1>
//         {/* Main Flex Container */}
//         <div className="flex flex-wrap">
//           {/* Filter Section */}
//           <div className="w-full md:w-1/4 p-4">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
//               Filter Rooms
//             </h2>
//             <div className="mb-4">
//               <label className="block mb-2 text-gray-800 dark:text-gray-200">
//                 Min Price:
//               </label>
//               <input
//                 type="number"
//                 name="minPrice"
//                 value={filters.minPrice}
//                 onChange={handleFilterChange}
//                 className="border rounded w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-gray-800 dark:text-gray-200">
//                 Max Price:
//               </label>
//               <input
//                 type="number"
//                 name="maxPrice"
//                 value={filters.maxPrice}
//                 onChange={handleFilterChange}
//                 className="border rounded w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-gray-800 dark:text-gray-200">
//                 Room Type:
//               </label>
//               <select
//                 name="roomType"
//                 value={filters.roomType}
//                 onChange={handleFilterChange}
//                 className="border rounded w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               >
//                 <option value="">All</option>
//                 <option value="Deluxe">Deluxe</option>
//                 <option value="Standard">Standard</option>
//                 <option value="Suite">Suite</option>
//                 <option value="Family">Family</option>
//               </select>
//             </div>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out w-full">
//               Apply Filters
//             </button>
//           </div>
//           {/* Room Cards Section */}
//           <div className="w-full md:w-3/4 p-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredRooms.map((room) => (
//                 <div
//                   key={room.id}
//                   className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700"
//                 >
//                   <img
//                     className="w-full h-48 object-cover"
//                     src={room.image}
//                     alt={room.name}
//                   />
//                   <div className="p-6">
//                     <h2 className="font-bold text-2xl text-gray-800 mb-2 dark:text-white">
//                       {room.name}
//                     </h2>
//                     <p className="text-gray-600 text-base mb-4 dark:text-gray-400">
//                       {room.description}
//                     </p>
//                     <p className="text-gray-800 font-bold text-lg dark:text-white">
//                       ${room.price} / night
//                     </p>
//                     <div className="mt-4">
//                       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out">
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;
"use client";
import React, { useState } from "react";

const App = () => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 500,
    roomType: "",
  });

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description:
        "A spacious room with stunning views and luxurious amenities.",
      price: 120,
      image: "https://via.placeholder.com/300x200?text=Deluxe+Room",
      type: "Deluxe",
    },
    {
      id: 2,
      name: "Standard Room",
      description: "A cozy room perfect for a short stay.",
      price: 80,
      image: "https://via.placeholder.com/300x200?text=Standard+Room",
      type: "Standard",
    },
    {
      id: 3,
      name: "Suite",
      description: "An elegant suite with a separate living area.",
      price: 200,
      image: "https://via.placeholder.com/300x200?text=Suite",
      type: "Suite",
    },
    {
      id: 4,
      name: "Family Room",
      description: "A large room suitable for families with children.",
      price: 150,
      image: "https://via.placeholder.com/300x200?text=Family+Room",
      type: "Family",
    },
  ];

  // Function to handle filter changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to filter rooms based on selected filters
  const filteredRooms = rooms.filter((room) => {
    const isPriceInRange =
      room.price >= filters.minPrice && room.price <= filters.maxPrice;
    const isTypeMatch =
      filters.roomType === "" || room.type === filters.roomType;

    return isPriceInRange && isTypeMatch;
  });

  return (
    <section className="dark:bg-gray-800">
      <div className="container mx-auto p-4 bg-white dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-center my-8 text-gray-800 dark:text-white">
          Our Rooms
        </h1>
        {/* Main Flex Container */}
        <div className="flex flex-wrap">
          {/* Filter Section */}
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Filter Rooms
            </h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-800 dark:text-gray-200">
                Min Price:
              </label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="border rounded w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-800 dark:text-gray-200">
                Max Price:
              </label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="border rounded w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-800 dark:text-gray-200">
                Room Type:
              </label>
              <select
                name="roomType"
                value={filters.roomType}
                onChange={handleFilterChange}
                className="border rounded w-full px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">All</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Standard">Standard</option>
                <option value="Suite">Suite</option>
                <option value="Family">Family</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out w-full">
              Apply Filters
            </button>
          </div>
          {/* Room Cards Section */}
          <div className="w-full md:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRooms.map((room) => (
                <div
                  key={room.id}
                  className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={room.image}
                    alt={room.name}
                  />
                  <div className="p-6">
                    <h2 className="font-bold text-2xl text-gray-800 mb-2 dark:text-white">
                      {room.name}
                    </h2>
                    <p className="text-gray-600 text-base mb-4 dark:text-gray-400">
                      {room.description}
                    </p>
                    <p className="text-gray-800 font-bold text-lg dark:text-white">
                      ${room.price} / night
                    </p>
                    <div className="mt-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
