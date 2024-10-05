// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FormEvent, useState } from "react";

// const toursData = [
//   {
//     id: 1,
//     name: "City Tour",
//     location: "New York",
//     price: 50,
//     category: "City",
//     duration: 2,
//     month: "January",
//   },
//   {
//     id: 2,
//     name: "Mountain Adventure",
//     location: "Colorado",
//     price: 120,
//     category: "Adventure",
//     duration: 5,
//     month: "February",
//   },
//   {
//     id: 3,
//     name: "Beach Escape",
//     location: "Miami",
//     price: 80,
//     category: "Beach",
//     duration: 3,
//     month: "March",
//   },
//   {
//     id: 4,
//     name: "Desert Safari",
//     location: "Nevada",
//     price: 200,
//     category: "Desert",
//     duration: 4,
//     month: "April",
//   },
//   {
//     id: 5,
//     name: "Jungle Trek",
//     location: "Amazon",
//     price: 150,
//     category: "Jungle",
//     duration: 7,
//     month: "May",
//   },
// ];

// const ToursPage = () => {
//   const [filteredTours, setFilteredTours] = useState(toursData);
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [month, setMonth] = useState("");
//   const [category, setCategory] = useState("");
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [duration, setDuration] = useState("");
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   // Handle filter logic

//   const handleFilter = (e: FormEvent) => {
//     e.preventDefault();
//     const filtered = toursData.filter(
//       (tour) =>
//         tour.name.toLowerCase().includes(search.toLowerCase()) &&
//         tour.location.toLowerCase().includes(location.toLowerCase()) &&
//         (month === "" || tour.month === month) &&
//         (category === "" || tour.category === category) &&
//         tour.price <= maxPrice &&
//         (duration === "" || tour.duration <= parseInt(duration)) // Convert duration to number
//     );
//     setFilteredTours(filtered);
//   };

//   return (
//     <section className="dark:bg-gray-900">
//       <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
//         <h1 className="text-4xl font-bold mb-6">Tours List</h1>
//         {/* Layout for Sidebar and Tour List */}
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Mobile Drawer Button */}
//           <button
//             className="md:hidden bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded mb-4"
//             onClick={() => setIsDrawerOpen(true)}
//           >
//             Open Filters
//           </button>
//           {/* Sidebar for Filters */}
//           <div
//             className={`${
//               isDrawerOpen ? "translate-x-0" : "-translate-x-full"
//             } md:w-1/4 transition-transform duration-300 fixed inset-0 z-50 bg-gray-100 dark:bg-gray-800 p-4 md:relative md:translate-x-0`}
//           >
//             <button
//               className="absolute top-4 right-4 text-black dark:text-white"
//               onClick={() => setIsDrawerOpen(false)}
//             >
//               &times;
//             </button>
//             <form onSubmit={handleFilter}>
//               <h2 className="text-2xl font-bold mb-4">Filter Tours</h2>

//               {/* Search by Tour Name */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="search"
//                 >
//                   Search
//                 </label>
//                 <input
//                   type="text"
//                   id="search"
//                   placeholder="Search by Tour Name"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>

//               {/* Location Filter */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="location"
//                 >
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   placeholder="Location"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>

//               {/* Month Filter */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="month"
//                 >
//                   Select Month
//                 </label>
//                 <select
//                   id="month"
//                   value={month}
//                   onChange={(e) => setMonth(e.target.value)}
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 >
//                   <option value="">All Months</option>
//                   <option value="January">January</option>
//                   <option value="February">February</option>
//                   <option value="March">March</option>
//                   <option value="April">April</option>
//                   <option value="May">May</option>
//                 </select>
//               </div>

//               {/* Category Filter */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="category"
//                 >
//                   Select Category
//                 </label>
//                 <select
//                   id="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 >
//                   <option value="">All Categories</option>
//                   <option value="City">City</option>
//                   <option value="Adventure">Adventure</option>
//                   <option value="Beach">Beach</option>
//                   <option value="Desert">Desert</option>
//                   <option value="Jungle">Jungle</option>
//                 </select>
//               </div>

//               {/* Max Price Filter */}
//               {/* Max Price Filter */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="maxPrice"
//                 >
//                   Max Price
//                 </label>
//                 <input
//                   type="number"
//                   id="maxPrice"
//                   placeholder="Max Price"
//                   value={maxPrice}
//                   onChange={(e) => setMaxPrice(Number(e.target.value))} // Convert to number
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>

//               {/* Duration Filter */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="duration"
//                 >
//                   Max Duration (Days)
//                 </label>
//                 <input
//                   type="number"
//                   id="duration"
//                   placeholder="Max Duration"
//                   value={duration}
//                   onChange={(e) => setDuration(Number(e.target.value))} // Convert to number
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>

//               {/* Duration Filter */}
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   htmlFor="duration"
//                 >
//                   Max Duration (Days)
//                 </label>
//                 <input
//                   type="number"
//                   id="duration"
//                   placeholder="Max Duration"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
//                 />
//               </div>

//               <button className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 w-full transition duration-300">
//                 Apply Filters
//               </button>
//             </form>
//           </div>

//           {/* Display Tour Cards */}
//           <div className="w-full md:w-3/4">
//             {filteredTours.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//                 {filteredTours.map((tour) => (
//                   <div
//                     key={tour.id}
//                     className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//                   >
//                     <div className="relative">
//                       {/* Image with gradient overlay */}
//                       <div className="relative h-48">
//                         <Image
//                           src={`https://source.unsplash.com/featured/?${tour.name}`}
//                           alt={tour.name}
//                           layout="fill"
//                           objectFit="cover"
//                           className="transition-transform duration-300 transform hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
//                         {/* Price Badge */}
//                         <div className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-full">
//                           ${tour.price}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="p-4 dark:text-white">
//                       <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
//                       <p className="text-gray-600 dark:text-gray-300">
//                         {tour.location}
//                       </p>
//                       <p className="text-gray-600 dark:text-gray-300">
//                         {tour.category} - {tour.duration} days
//                       </p>
//                       <div>
//                         <Link href="tour-list/1">
//                           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-red-400 dark:hover:bg-red-500">
//                             see Detiels
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No tours found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ToursPage;
"use client";
// import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

// Define the interface for the tour data
interface Tour {
  id: number;
  name: string;
  location: string;
  price: number;
  category: string;
  duration: number; // Duration in days
  month: string;
}

// Declare the tours data with the specified type
const toursData: Tour[] = [
  {
    id: 1,
    name: "City Tour",
    location: "New York",
    price: 50,
    category: "City",
    duration: 2,
    month: "January",
  },
  {
    id: 2,
    name: "Mountain Adventure",
    location: "Colorado",
    price: 120,
    category: "Adventure",
    duration: 5,
    month: "February",
  },
  {
    id: 3,
    name: "Beach Escape",
    location: "Miami",
    price: 80,
    category: "Beach",
    duration: 3,
    month: "March",
  },
  {
    id: 4,
    name: "Desert Safari",
    location: "Nevada",
    price: 200,
    category: "Desert",
    duration: 4,
    month: "April",
  },
  {
    id: 5,
    name: "Jungle Trek",
    location: "Amazon",
    price: 150,
    category: "Jungle",
    duration: 7,
    month: "May",
  },
];

const ToursPage = () => {
  const [filteredTours, setFilteredTours] = useState<Tour[]>(toursData);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [duration, setDuration] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle filter logic
  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    const filtered = toursData.filter(
      (tour) =>
        tour.name.toLowerCase().includes(search.toLowerCase()) &&
        tour.location.toLowerCase().includes(location.toLowerCase()) &&
        (month === "" || tour.month === month) &&
        (category === "" || tour.category === category) &&
        tour.price <= maxPrice &&
        (duration === "" || tour.duration <= parseInt(duration))
    );
    setFilteredTours(filtered);
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-6">Tours List</h1>
        {/* Layout for Sidebar and Tour List */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Mobile Drawer Button */}
          <button
            className="md:hidden bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded mb-4"
            onClick={() => setIsDrawerOpen(true)}
          >
            Open Filters
          </button>
          {/* Sidebar for Filters */}
          <div
            className={`${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } md:w-1/4 transition-transform duration-300 fixed inset-0 z-50 bg-gray-100 dark:bg-gray-800 p-4 md:relative md:translate-x-0`}
          >
            <button
              className="absolute top-4 right-4 text-black dark:text-white"
              onClick={() => setIsDrawerOpen(false)}
            >
              &times;
            </button>
            <form onSubmit={handleFilter}>
              <h2 className="text-2xl font-bold mb-4">Filter Tours</h2>

              {/* Search by Tour Name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="search"
                >
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by Tour Name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              {/* Location Filter */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              {/* Month Filter */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="month"
                >
                  Select Month
                </label>
                <select
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="">All Months</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="category"
                >
                  Select Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="">All Categories</option>
                  <option value="City">City</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Beach">Beach</option>
                  <option value="Desert">Desert</option>
                  <option value="Jungle">Jungle</option>
                </select>
              </div>

              {/* Max Price Filter */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="maxPrice"
                >
                  Max Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              {/* Duration Filter */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="duration"
                >
                  Max Duration (Days)
                </label>
                <input
                  type="number"
                  id="duration"
                  placeholder="Max Duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Apply Filters
              </button>
            </form>
          </div>

          {/* Tour Cards List */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTours.map((tour) => (
                <div key={tour.id} className="border rounded shadow-lg p-4">
                  <h3 className="text-xl font-bold">{tour.name}</h3>
                  <p>Location: {tour.location}</p>
                  <p>Price: ${tour.price}</p>
                  <p>Duration: {tour.duration} days</p>
                  <Link
                    href={`tour-list/${tour.id}`}
                    className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded mt-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursPage;
