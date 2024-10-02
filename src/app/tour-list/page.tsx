"use client";
import { useState } from "react";

const toursData = [
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
  const [filteredTours, setFilteredTours] = useState(toursData);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [duration, setDuration] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle filter logic
  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = toursData.filter(
      (tour) =>
        tour.name.toLowerCase().includes(search.toLowerCase()) &&
        tour.location.toLowerCase().includes(location.toLowerCase()) &&
        (month === "" || tour.month === month) &&
        (category === "" || tour.category === category) &&
        tour.price <= maxPrice &&
        (duration === "" || tour.duration <= duration)
    );
    setFilteredTours(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Tours List</h1>

      {/* Layout for Sidebar and Tour List */}
      <div className="flex flex-col md:flex-row">
        {/* Mobile Drawer Button */}
        <button
          className="md:hidden bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => setIsDrawerOpen(true)}
        >
          Open Filters
        </button>

        {/* Sidebar for Filters */}
        <div
          className={`${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } md:w-1/4 transition-transform duration-300 fixed inset-0 z-50 bg-gray-100 p-4 md:relative md:translate-x-0`}
        >
          <button
            className="absolute top-4 right-4 text-black"
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
                className="p-2 border rounded w-full"
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
                className="p-2 border rounded w-full"
              />
            </div>

            {/* Month Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="month">
                Select Month
              </label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="p-2 border rounded w-full"
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
                className="p-2 border rounded w-full"
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
                onChange={(e) => setMaxPrice(e.target.value)}
                className="p-2 border rounded w-full"
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
                className="p-2 border rounded w-full"
              />
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Apply Filters
            </button>
          </form>
        </div>

        {/* Tours List Section */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold">{tour.name}</h2>
                  <p className="text-gray-600">Location: {tour.location}</p>
                  <p className="text-gray-600">Price: ${tour.price}</p>
                  <p className="text-gray-600">Category: {tour.category}</p>
                  <p className="text-gray-600">
                    Duration: {tour.duration} days
                  </p>
                  <p className="text-gray-600">Month: {tour.month}</p>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-red-500">
                No tours found for the selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
