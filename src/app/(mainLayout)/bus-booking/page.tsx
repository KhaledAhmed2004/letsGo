"use client";
import React, { useState } from "react";
import {
  FaClock,
  FaBus,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBusAlt,
  FaUsers,
  FaChair,
  FaSort,
} from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { GoFilter } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";


const FeaturedBus = () => {
  const seatStatuses = [
    { className: "BOOKED", color: "text-red-500" }, // Red for booked
    { className: "AVAILABLE", color: "text-green-500" }, // Green for available
    { className: "SELECTED", color: "text-blue-500" }
  ];

  const busData = [
    {
      id: 1,
      name: "Desh Travels",
      code: "001-DHK-CTG",
      type: "Non AC",
      startingPoint: "Mohakhali",
      endPoint: "Chittagong",
      departureTime: "6:15 AM",
      arrivalTime: "12:35 PM",
      seatsAvailable: 32,
      additionalCharge: "No Additional Charge",
      price: 690.0,
    },
    {
      id: 5,
      name: "Eagle Transport",
      code: "005-DHK-CHAP",
      type: "Non AC",
      startingPoint: "Kallyanpur",
      endPoint: "Chittagong",
      departureTime: "11:00 AM",
      arrivalTime: "5:00 PM",
      seatsAvailable: 32,
      additionalCharge: "No Additional Charge",
      price: 650.0,
    },
    {
      id: 3,
      name: "Saint Martin Paribahan",
      code: "003-DHK-CTG",
      type: "AC",
      startingPoint: "Motijheel",
      endPoint: "Chittagong",
      departureTime: "9:30 AM",
      arrivalTime: "3:00 PM",
      seatsAvailable: 29,
      additionalCharge: "No Additional Charge",
      price: 950.0,
    },
    {
      id: 4,
      name: "Green Line",
      code: "004-DHK-CHAP",
      type: "AC",
      startingPoint: "Kallyanpur",
      endPoint: "Chittagong",
      departureTime: "10:00 AM",
      arrivalTime: "4:00 PM",
      seatsAvailable: 28,
      additionalCharge: "No Additional Charge",
      price: 900.0,
    },
       
    {
      id: 6,
      name: "Saint Martin Paribahan",
      code: "004-DHK-CTG",
      type: "AC",
      startingPoint: "Motijheel",
      endPoint: "Chittagong",
      departureTime: "12:30 PM",
      arrivalTime: "6:00 PM",
      seatsAvailable: 28,
      additionalCharge: "No Additional Charge",
      price: 950.0,
    },
    {
      id: 2,
      name: "National Travels",
      code: "002-DHK-CTG",
      type: "AC",
      startingPoint: "Gulistan",
      endPoint: "Chittagong",
      departureTime: "8:00 AM",
      arrivalTime: "2:30 PM",
      seatsAvailable: 26,
      additionalCharge: "No Additional Charge",
      price: 850.0,
    },
    
  ];

  const seatArrangement = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
  ];

  const [isFilterSelectionVisible, setIsFiterSelectionVisible] =
    useState(false); // Control form visibility

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  //   const toggleSeatSelection = () => {
  //     setIsSeatSelectionVisible((prev) => !prev);
  //   };
  const toggleFilterSelection = () => {
    setIsFiterSelectionVisible((prev) => !prev);
  };

  // State to manage which bus has seat selection visible
  //   const [visibleSeats, setVisibleSeats] = useState({});
  const [visibleSeats, setVisibleSeats] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Function to toggle seat selection visibility for a specific bus
  const toggleSeatSelection = (busId: number) => {
    setVisibleSeats((prev) => ({
      ...prev,
      [busId]: !prev[busId],
    }));
  };

  // const [startDate, setStartDate] = useState(null);
  const [selectedFromLocation, setSelectedFromLocation] = useState("Dhaka");
  const [selectedToLocation, setSelectedToLocation] = useState("Rajshahi");
  const [startDate, setStartDate] = useState("");

  // Function to handle date change
  const handleDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setStartDate(e.target.value);
  };
  return (
    <>
      <section
        className="search-location-selection overlay relative z-1 py-14 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://bdtickets.com/images/banner/banner-bg-sm.webp")',
        }}
      >
        <div className="container mx-auto text-white px-6 lg:px-0">
          <div className="flex flex-wrap items-center justify-between mb-8">
            {/* Onward Journey Information */}
            <div className="w-full lg:w-1/3 bg-opacity-20 p-6 rounded-md shadow-2xl backdrop-blur-md hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col space-y-6">
                <span className="text-lg font-extrabold text-blue-400">
                  Onward Journey
                </span>

                <div className="flex items-center justify-between space-x-4">
                  <span className="text-xl font-semibold">
                    From &nbsp;
                    <select
                      className="text-gray-900 bg-opacity-10 border-none focus:bg-opacity-20 focus:text-gray-900 focus:border-blue-400 text-lg transition duration-300 rounded-lg p-2"
                      value={selectedFromLocation}
                      onChange={(e) => setSelectedFromLocation(e.target.value)}
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </select>
                  </span>
                  <span className="text-xl font-semibold">
                    To &nbsp;
                    <select
                      className="text-gray-900 bg-opacity-10 border-none focus:bg-opacity-20 focus:text-gray-900 focus:border-blue-400 text-lg transition duration-300 rounded-lg p-2"
                      value={selectedToLocation}
                      onChange={(e) => setSelectedToLocation(e.target.value)}
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </select>
                  </span>
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRegCalendarAlt className="text-blue-400 text-2xl" />
                  </span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleDateChange}
                    className="bg-white bg-opacity-20 text-white pl-10 pr-4 py-4 border-none focus:bg-opacity-30 text-lg transition duration-300 ease-in-out rounded-lg w-full shadow-md hover:shadow-lg focus:shadow-xl placeholder-white focus:placeholder-gray-500"
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>

            {/* Modify Search Button */}
            <button className="bg-red-600 transition-all duration-300 text-white p-4 rounded-xl shadow-lg mt-4 lg:mt-0 hover:bg-red-500 transform hover:scale-105">
             Modify Search
            </button>
          </div>

          {/* Bus Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Total Buses Found */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-opacity-30 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <FaBusAlt className="text-blue-400 text-3xl animate-pulse" />
                <h3 className="text-xl font-semibold">Total Buses Found</h3>
              </div>
              <p className="text-3xl font-bold">6</p>
            </div>

            {/* Total Operators Found */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-opacity-30 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <FaUsers className="text-blue-400 text-3xl animate-pulse" />
                <h3 className="text-xl font-semibold">Total Operators Found</h3>
              </div>
              <p className="text-3xl font-bold">5</p>
            </div>

            {/* Total Seats Available */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-opacity-30 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <FaChair className="text-blue-400 text-3xl animate-pulse" />
                <h3 className="text-xl font-semibold">Total Seats Available</h3>
              </div>
              <p className="text-3xl font-bold">175</p>
            </div>
          </div>
        </div>
      </section>

      <section className="search-search-filter p-4">
        <div className="search-d-search-filter">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="w-1/4">
                <div className="flex items-center">
                  <GoFilter />
                  <p className="text-lg font-semibold">Sort By</p>
                </div>
              </div>
              <div className="w-1/2">
                <ul className="flex justify-between space-x-4">
                  <li className="flex items-center">
                    <label className="noselect" id="sortLabelDeparture">
                      Departure Time
                    </label>
                    <FaSort />
                  </li>
                  <li className="flex items-center">
                    <label className="noselect" id="sortLabelSeats">
                      Available Seats
                    </label>
                    <FaSort />
                  </li>
                  <li className="flex items-center">
                    <label className="noselect" id="sortLabelFare">
                      Fare
                    </label>
                    <FaSort />
                  </li>
                  <li className="flex items-center">
                    <label className="noselect" id="sortLabelOffers">
                      Special Offers
                    </label>
                    <FaSort />
                  </li>
                </ul>
              </div>
              <div className="w-1/4 text-right">
                <button
                  className="p-2 border-[3px] rounded-lg border-red-600 "
                  onClick={toggleFilterSelection}
                >
                  FILTER BY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFilterSelectionVisible && (
        <div className="container mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Bus Type Filter */}
            <div className="mb-6">
              <h6 className="mb-4 font-bold text-lg text-gray-800 tracking-wide">
                Bus Type
              </h6>
              <ul className="list-none space-y-3">
                {["AC", "Non AC"].map((type) => (
                  <li key={type}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={type}
                        className="accent-blue-600 h-5 w-5 transition-transform duration-300 hover:scale-110"
                      />
                      <label
                        htmlFor={type}
                        className="text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors duration-200"
                      >
                        {type}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departure Time Filter */}
            <div className="lg:col-span-3">
              <h6 className="font-bold text-lg text-gray-800 mb-4">
                Departure Time
              </h6>
              <ul className="flex gap-3 flex-wrap items-center">
                {[
                  "Before 4AM",
                  "4AM to 8AM",
                  "8AM to 12PM",
                  "12PM to 4PM",
                  "4PM to 8PM",
                  "After 8PM",
                ].map((time) => (
                  <li key={time} className="flex flex-col items-center">
                    <button className="bg-gray-200 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md transform hover:scale-105">
                      {time}
                    </button>
                    <strong
                      className="text-gray-600 text-sm"
                      style={{ margin: "0" }}
                    >
                      {time}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bus Operators */}
          <div className="mt-8">
            <hr className="mb-6 border-gray-300" />
            <h6 className="mb-4 font-bold text-lg text-gray-800">
              Bus Operators
            </h6>
            <ul className="flex flex-wrap gap-5">
              {["National Travels", "Grameen Travels", "Desh Travels"].map(
                (operator) => (
                  <li key={operator}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={operator.replace(/\s+/g, "")} // Create unique IDs
                        className="accent-blue-600 h-5 w-5 transition-transform duration-300 hover:scale-110"
                      />
                      <label
                        htmlFor={operator.replace(/\s+/g, "")}
                        className="text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors duration-200"
                      >
                        {operator}
                      </label>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Filter Buttons */}
          <div className="mt-6 flex justify-between">
            <button className="bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 transition-all shadow-lg transform hover:scale-105">
              Clear Filter
            </button>
          </div>
        </div>
      )}

      {/* <div className="featured-bus p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        <div className="more-info-hide">
          {busData.map((bus, index) => (
            <ul
              key={index}
              className="result-content flex flex-col md:flex-row md:items-center border p-4 mb-4 rounded-lg shadow-md"
            >
              <li className="flex-1 mb-4 md:mb-0">
                <div className="bus-name mb-2">
                  <h6 className="font-semibold text-2xl text-red-600 flex items-center">
                    <FaBus className="mr-2 text-3xl" />
                    {bus.name}
                  </h6>
                  <p className="text-gray-600 text-lg">
                    {bus.code}{" "}
                    <span className="ml-2 font-semibold">{bus.type}</span>
                  </p>
                </div>
                <div className="points text-gray-500">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-lg" />
                    Starting Point:{" "}
                    <span className="text-red-600">{bus.startingPoint}</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-lg" />
                    End Point:{" "}
                    <span className="text-red-600">{bus.endPoint}</span>
                  </p>
                </div>
              </li>

              <li className="flex-1 mb-4 md:mb-0">
                <div className="item-content text-center">
                  <h6 className="font-semibold text-gray-700">
                    Departure Time
                  </h6>
                  <p className="text-gray-500 flex items-center justify-center">
                    <FaClock className="mr-1" />
                    {bus.departureTime}
                  </p>
                </div>
              </li>
              <li className="flex-1 mb-4 md:mb-0">
                <div className="item-content text-center">
                  <h6 className="font-semibold text-gray-700">Arrival Time</h6>
                  <p className="text-gray-500 flex items-center justify-center">
                    <FaClock className="mr-1" />
                    {bus.arrivalTime}
                  </p>
                </div>
              </li>
              <li className="flex-1 mb-4 md:mb-0">
                <div className="item-content text-center">
                  <h6 className="font-semibold text-gray-700">
                    Seats Available
                  </h6>
                  <p className="text-gray-500 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 mr-1" />
                    {bus.seatsAvailable}
                  </p>
                </div>
              </li>

              <li className="flex gap-2 items-center justify-center flex-col md:flex-row">
                <div>
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm">
                    {bus.additionalCharge}
                  </span>
                  <h3 className="text-3xl font-bold text-purple-700 mt-1">
                    ৳{bus.price.toFixed(2)}
                  </h3>
                </div>
                <div className="flex flex-col mt-2">
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    onClick={toggleSeatSelection}
                  >
                    View Seats
                  </button>
                  <a
                    href="#"
                    className="text-gray-500 cursor-pointer hover:text-blue-600 transition-colors duration-300 text-sm mt-2"
                  >
                    Cancellation Policy
                  </a>
                </div>
              </li>
            </ul>
          ))}
        </div>

        {isSeatSelectionVisible && (
          <div className="seat-selection-form mt-6 transition-all duration-500 ease-in-out">
            <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
              <div className="mb-6">
                <h5 className="text-xl font-semibold mb-2">Seat Legend</h5>
                <ul className="flex flex-wrap gap-4">
                  {seatStatuses.map((status, index) => (
                    <li key={index} className="flex items-center">
                      <MdChair className={`${status.color} text-2xl`} />
                      <span className={`ml-2 ${status.color}`}>
                        {status.className}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[30%] mb-6 lg:mb-0 border">
                  <div className="py-2 flex justify-end pr-10">
                    <GiSteeringWheel className="text-4xl" />
                  </div>
                  <hr />
                  <ul className="grid grid-cols-1 gap-2">
                    {seatArrangement.map((row, rowIndex) => (
                      <li
                        key={rowIndex}
                        className="flex items-center justify-center"
                      >
                        {row.map((seat, colIndex) => {
                          if (colIndex === 2) {
                            return (
                              <div key={colIndex} className="w-16 h-16"></div>
                            ); // Gap
                          }
                          const status = seatStatuses[seat];
                          return (
                            <span
                              key={colIndex}
                              className={`seat ${status.className} flex items-center justify-center cursor-pointer transition duration-300 transform hover:scale-105`}
                              // onClick={() => handleSeatClick(rowIndex, colIndex)}
                              role="button"
                              tabIndex={0}
                              aria-label={`Row ${rowIndex + 1} Seat ${
                                colIndex + 1
                              } - ${status.className}`}
                            >
                              <MdChair className={`${status.color} text-4xl`} />
                            </span>
                          );
                        })}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-12 sm:col-span-5 lg:col-span-8 order-1 lg:order-1">
                  <div className="flex bg-gray-50 p-6 rounded-lg shadow-lg">
                    <div className="lg:col-span-4 md:col-span-12 pr-4 w-[70%]">
                      <div className="seat-info pb-4 border-b border-gray-300">
                        <h6 className="text-red-600 font-semibold text-lg">
                          Boarding/Dropping
                        </h6>
                        <div className="mt-4">
                          <div className="mb-4">
                            <label
                              className="mb-2 font-medium text-gray-700"
                              htmlFor="boardingPoint"
                            >
                              Boarding Point*
                            </label>
                            <select
                              id="boardingPoint"
                              className="border border-gray-300 rounded-lg hover:shadow-md transition p-2 w-full"
                              required
                            >
                              <option value="" disabled selected>
                                Select boarding point
                              </option>
                              <option value="point1">Point 1</option>
                              <option value="point2">Point 2</option>
                              <option value="point3">Point 3</option>
                            </select>
                          </div>

                          <div className="mb-4">
                            <label
                              className="mb-2 font-medium text-gray-700"
                              htmlFor="droppingPoint"
                            >
                              Dropping Point*
                            </label>
                            <select
                              id="droppingPoint"
                              className="border border-gray-300 rounded-lg hover:shadow-md transition p-2 w-full"
                              required
                            >
                              <option value="" disabled selected>
                                Select dropping point
                              </option>
                              <option value="drop1">Drop Point 1</option>
                              <option value="drop2">Drop Point 2</option>
                              <option value="drop3">Drop Point 3</option>
                            </select>
                          </div>

                          <div className="hidden sm:block mt-6">
                            <h6 className="text-lg font-semibold text-gray-600">
                              Seat Information
                            </h6>
                            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                              <div className="flex justify-between text-gray-700">
                                <p>Seat Fare:</p>
                                <p>৳ 0</p>
                              </div>
                              <div className="flex justify-between text-gray-700">
                                <p>Service Charge:</p>
                                <p>৳ 0</p>
                              </div>
                              <div className="flex justify-between text-gray-700">
                                <p>PGW Charge:</p>
                                <p>৳ 0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-8 md:col-span-12 mt-6 lg:mt-0">
                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex flex-col">
                          <label
                            htmlFor="mobile"
                            className="text-gray-700 font-medium"
                          >
                            Mobile Number*
                          </label>
                          <input
                            name="phoneNumber"
                            type="text"
                            id="mobile"
                            required
                            className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your mobile number"
                          />
                          <button className="bg-red-600 text-white w-full py-2 mt-6 rounded-lg shadow hover:bg-red-700 transition">
                            Submit
                          </button>
                          <p className="mt-4 text-gray-600">
                            Already verified your phone number and have a
                            password?
                            <button
                              type="button"
                              className="text-red-600 underline ml-2"
                            >
                              Click here to login
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div> */}

      <div className="featured-bus p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        {busData.map((bus, index) => (
          <div key={index}>
            <ul className="result-content flex flex-col md:flex-row md:items-center border p-4 mb-4 rounded-lg shadow-md">
              {/* Bus Information */}
              <li className="flex-1 mb-4 md:mb-0">
                <div className="bus-name mb-2">
                  <h6 className="font-semibold text-2xl text-red-600 flex items-center">
                    <FaBus className="mr-2 text-3xl" />
                    {bus.name}
                  </h6>
                  <p className="text-gray-600 text-lg">
                    {bus.code}{" "}
                    <span className="ml-2 font-semibold">{bus.type}</span>
                  </p>
                </div>
                <div className="points text-gray-500">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-lg" />
                    Starting Point:{" "}
                    <span className="text-red-600">{bus.startingPoint}</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-lg" />
                    End Point:{" "}
                    <span className="text-red-600">{bus.endPoint}</span>
                  </p>
                </div>
              </li>

              {/* Departure, Arrival, and Seats Available Info */}
              <li className="flex-1 mb-4 md:mb-0">
                <div className="item-content text-center">
                  <h6 className="font-semibold text-gray-700">
                    Departure Time
                  </h6>
                  <p className="text-gray-500 flex items-center justify-center">
                    <FaClock className="mr-1" />
                    {bus.departureTime}
                  </p>
                </div>
              </li>
              <li className="flex-1 mb-4 md:mb-0">
                <div className="item-content text-center">
                  <h6 className="font-semibold text-gray-700">Arrival Time</h6>
                  <p className="text-gray-500 flex items-center justify-center">
                    <FaClock className="mr-1" />
                    {bus.arrivalTime}
                  </p>
                </div>
              </li>
              <li className="flex-1 mb-4 md:mb-0">
                <div className="item-content text-center">
                  <h6 className="font-semibold text-gray-700">
                    Seats Available
                  </h6>
                  <p className="text-gray-500 flex items-center justify-center">
                    <FaCheckCircle className="text-green-500 mr-1" />
                    {bus.seatsAvailable}
                  </p>
                </div>
              </li>

              {/* Pricing and Buttons */}
              <li className="flex gap-2 items-center justify-center flex-col md:flex-row">
                <div>
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm">
                    {bus.additionalCharge}
                  </span>
                  <h3 className="text-3xl font-bold text-purple-700 mt-1">
                    ৳{bus.price.toFixed(2)}
                  </h3>
                </div>
                <div className="flex flex-col mt-2">
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    onClick={() => toggleSeatSelection(bus.id)} // Use bus id to toggle visibility
                  >
                    {visibleSeats[bus.id] ? "Hide Seats" : "View Seats"}
                  </button>
                  <a
                    href="#"
                    className="text-gray-500 cursor-pointer hover:text-blue-600 transition-colors duration-300 text-sm mt-2"
                  >
                    Cancellation Policy
                  </a>
                </div>
              </li>
            </ul>

            {/* Conditionally Rendered Seat Selection Form */}
            {visibleSeats[bus.id] && ( // Show seats only for the specific bus
              <div className="seat-selection-form mt-6 transition-all duration-500 ease-in-out">
                <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
                  {/* Seat Legend */}
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold mb-2">Seat Legend</h5>
                    <ul className="flex flex-wrap gap-4">
                      {seatStatuses.map((status, index) => (
                        <li key={index} className="flex items-center">
                          <MdChair className={`${status.color} text-2xl`} />
                          <span className={`ml-2 ${status.color}`}>
                            {status.className}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seat Map */}
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-[30%] mb-6 lg:mb-0 border">
                      <div className="py-2 flex justify-end pr-10">
                        <GiSteeringWheel className="text-4xl" />
                      </div>
                      <hr />
                      <ul className="grid grid-cols-1 gap-2">
                        {seatArrangement.map((row, rowIndex) => (
                          <li
                            key={rowIndex}
                            className="flex items-center justify-center"
                          >
                            {row.map((seat, colIndex) => {
                              if (colIndex === 2) {
                                return (
                                  <div
                                    key={colIndex}
                                    className="w-16 h-16"
                                  ></div>
                                ); // Gap
                              }
                              const status = seatStatuses[seat];
                              return (
                                <span
                                  key={colIndex}
                                  className={`seat ${status.className} flex items-center justify-center cursor-pointer transition duration-300 transform hover:scale-105`}
                                  role="button"
                                  tabIndex={0}
                                  aria-label={`Row ${rowIndex + 1} Seat ${
                                    colIndex + 1
                                  } - ${status.className}`}
                                >
                                  <MdChair
                                    className={`${status.color} text-4xl`}
                                  />
                                </span>
                              );
                            })}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Form Fields */}
                    <div className="col-span-12 sm:col-span-5 lg:col-span-8 order-1 lg:order-1">
                      <div className="flex bg-gray-50 p-6 rounded-lg shadow-lg">
                        <div className="lg:col-span-4 md:col-span-12 pr-4 w-[70%]">
                          <div className="seat-info pb-4 border-b border-gray-300">
                            <h6 className="text-red-600 font-semibold text-lg">
                              Boarding/Dropping
                            </h6>
                            <div className="mt-4">
                              <div className="mb-4">
                                <label
                                  className="mb-2 font-medium text-gray-700"
                                  htmlFor="boardingPoint"
                                >
                                  Boarding Point*
                                </label>
                                <select
                                  id="boardingPoint"
                                  className="border border-gray-300 rounded-lg hover:shadow-md transition p-2 w-full"
                                  required
                                >
                                  <option value="" disabled selected>
                                    Select boarding point
                                  </option>
                                  <option value="Mohakhali">Mohakhali</option>
                                  <option value="Dhanmondi">Dhanmondi</option>
                                  <option value="Gulistan">Gulistan</option>
                                </select>
                              </div>

                              <div className="mb-4">
                                <label
                                  className="mb-2 font-medium text-gray-700"
                                  htmlFor="droppingPoint"
                                >
                                  Dropping Point*
                                </label>
                                <select
                                  id="droppingPoint"
                                  className="border border-gray-300 rounded-lg hover:shadow-md transition p-2 w-full"
                                  required
                                >
                                  <option value="" disabled selected>
                                    Select dropping point
                                  </option>
                                  <option value="Chittagong">Chittagong</option>
                                  
                                </select>
                              </div>

                              <div className="hidden sm:block mt-6">
                                <h6 className="text-lg font-semibold text-gray-600">
                                  Seat Information
                                </h6>
                                <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                  <div className="flex justify-between text-gray-700">
                                    <p>Seat Fare:</p>
                                    <p>৳ 0</p>
                                  </div>
                                  <div className="flex justify-between text-gray-700">
                                    <p>Total Seat:</p>
                                    <p>0</p>
                                  </div>
                                  <div className="flex justify-between text-gray-700">
                                    <p>Total Charge:</p>
                                    <p>৳0</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-8 md:col-span-12 mt-6 lg:mt-0">
                          <div className="p-6 bg-white rounded-lg shadow-md">
                            <div className="">
                            <label
                                htmlFor="mobile"
                                className="text-gray-700 font-medium"
                              >
                                Name*
                              </label>
                              <input
                                name="phoneNumber"
                                type="text"
                                id="mobile"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your name"
                              />
                              <label
                                htmlFor="mobile"
                                className="text-gray-700 font-medium"
                              >
                                Mobile Number*
                              </label>
                              <input
                                name="phoneNumber"
                                type="text"
                                id="mobile"
                                required
                                className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your mobile number"
                              />
                              <button className="bg-red-600 text-white w-full py-2 mt-6 rounded-lg shadow hover:bg-red-700 transition">
                                Make Payment
                              </button>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedBus;
