import { useState } from "react";

const Filter = ({ isDrawerOpen, setIsDrawerOpen, handleFilter }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter({ search, location, month, category, maxPrice, duration });
  };

  return (
    <div
      className={`${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } md:w-1/4 transition-transform duration-300 fixed inset-0 z-50 bg-gray-100 dark:bg-gray-800 p-4 md:relative md:translate-x-0`}
    >
      <button
        className="absolute top-4 right-4 text-black dark:text-white"
        onClick={() => setIsDrawerOpen(false)}
        aria-label="Close drawer"
      >
        &times;
      </button>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Filter Tours</h2>

        {/* Search by Tour Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="search">
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
          <label className="block text-sm font-medium mb-2" htmlFor="location">
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
          <label className="block text-sm font-medium mb-2" htmlFor="month">
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
          <label className="block text-sm font-medium mb-2" htmlFor="category">
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
          <label className="block text-sm font-medium mb-2" htmlFor="maxPrice">
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

        <button
          type="submit"
          className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Apply Filters
        </button>

        {/* Clear Filters Button */}
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setLocation("");
            setMonth("");
            setCategory("");
            setMaxPrice("");
            setDuration("");
          }}
          className="mt-2 text-red-500"
        >
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
