"use client";
import { useState } from "react";
import { Drawer, Slider, Button, Select } from "antd";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { LuFilter } from "react-icons/lu";
import PackageCard from "@/components/modules/PackageCard";
import { useGetAllPackgeQuery } from "@/redux/features/packge/packgeApi";

const months = [
  { value: "", label: "All" },
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];
const ProductsPage = () => {
  // State management for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  // Fetch products based on filters using the API query
  const { data: products } = useGetAllPackgeQuery({
    searchQuery,
    minPrice,
    maxPrice,
    sortByOrder,
  });

  // Function to clear all filters
  const handleForClear = () => {
    setSearchQuery("");
    setMinPrice(0);
    setMaxPrice(1000);
    setSortByOrder("asc");
    setSelectedMonth("");
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Function to show the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <div className="mt-6 mb-28 px-4 lg:px-20 min-h-screen">
      <div className="divider font-semibold"></div>

      {/* Filter and Search Section */}
      <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
        {/* Filter Drawer Button for small devices */}
        <div className="lg:hidden my-2">
          <Button type="primary" onClick={showDrawer}>
            <LuFilter className="mr-2" />
            Open Filters
          </Button>
        </div>

        {/* Drawer for Small Devices */}
        <Drawer
          title="Filter"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="lg:hidden"
        >
          {/* Filter Content */}
          <div className="p-6">
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-lg">Filter Products</p>
              <div className="flex items-center gap-1 text-blue-600 font-medium">
                <button onClick={handleForClear}>Reset All</button>
                <RxCross2
                  className="cursor-pointer"
                  onClick={() => setDrawerVisible(false)}
                />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative flex items-center mt-4">
              <input
                className="p-3 rounded-lg w-full bg-gray-50 border border-blue-500 outline-none"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2">
                <BiSearch className="text-xl text-blue-500" />
              </button>
            </div>

            {/* Price Range Slider */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 font-semibold mb-2">
                Price Range
              </p>
              <Slider
                range
                value={[minPrice, maxPrice]}
                onChange={(value) => {
                  setMinPrice(value[0]);
                  setMaxPrice(value[1]);
                }}
                className="w-full"
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 font-semibold mb-3">
                Sort By
              </p>
              <Select
                defaultValue={sortByOrder}
                onChange={(value) => setSortByOrder(value)}
                className="w-full"
              >
                <Select.Option value="asc">Price: Low to High</Select.Option>
                <Select.Option value="desc">Price: High to Low</Select.Option>
              </Select>
            </div>
          </div>
        </Drawer>

        {/* Filter Section for larger devices */}
        <div className="hidden lg:block bg-gray-100 h-fit rounded-lg w-full lg:w-[28%] p-6 shadow-lg">
          <div className="flex justify-between mb-4">
            <p className="font-semibold text-lg">Filter Products</p>
            <div className="flex items-center gap-1 text-blue-600 font-medium">
              <button onClick={handleForClear}>Reset All</button>
              <RxCross2 className="cursor-pointer" onClick={closeDrawer} />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center mt-4">
            <input
              className="p-3 rounded-lg w-full bg-gray-50 border-[1px] border-blue-500 outline-none"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2">
              <BiSearch className="text-xl text-blue-500" />
            </button>
          </div>

          {/* Price Range Slider */}
          <div className="mt-4">
            {/* <p className="text-sm text-gray-600 font-semibold mb-2">
              Price Range
            </p> */}
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Price Range:{" "}
              <span className="font-bold">
                ${minPrice} - ${maxPrice}
              </span>
            </p>
            <Slider
              range
              value={[minPrice, maxPrice]}
              onChange={(value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
              className="w-full"
              min={0}
              max={1000}
            />
          </div>

          {/* Month Filter */}
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Month</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {months.map((month) => (
                <button
                  key={month.value}
                  onClick={() => setSelectedMonth(month.value)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300
                    ${
                      selectedMonth === month.value
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-blue-200"
                    }
                    dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600`}
                >
                  {month.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sorting Dropdown */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 font-semibold mb-3">Sort By</p>
            <Select
              defaultValue={sortByOrder}
              onChange={(value) => setSortByOrder(value)}
              className="w-full"
            >
              <Select.Option value="asc">Price: Low to High</Select.Option>
              <Select.Option value="desc">Price: High to Low</Select.Option>
            </Select>
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit lg:w-[72%]">
          {products?.data.map((tour) => (
            <PackageCard key={tour._id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
